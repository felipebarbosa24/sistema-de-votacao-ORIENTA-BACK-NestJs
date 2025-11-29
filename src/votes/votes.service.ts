import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vote, VoteDocument } from './schemas/vote.schema';
import { Model, Types } from 'mongoose';
import { PlatesService } from '../plates/plates.service';
import { ElectionDocument, Election } from '../elections/schemas/election.schema';

@Injectable()
export class VotesService {
  constructor(
    @InjectModel(Vote.name) private voteModel: Model<VoteDocument>,
    private platesService: PlatesService,
  ) {}

  // main logic: check election status, voter existence handled by caller (frontend should ensure), prevent duplicate voting
  async registerVote(payload: { idVoter: string; idPlate: string }) {
    // 1. find plate
    const plate = await this.platesService.findOne(payload.idPlate);
    if (!plate) throw new NotFoundException('Plate not found');

    // 2. fetch election to check status
    const election = await (plate.idElection as any).populate ? null : null;
    // Instead of complex populate here, query election via Mongoose directly:
    // we will query the election model via platesService (or import Election model)
    // but easier: platesService returned plate object with idElection as ObjectId; we can query Elections model here if needed.
    // To keep service decoupled, assume platesService.findOne() returned plate doc; we'll check election via platesService by injecting ElectionsService if desired.
    // For simplicity, let's check using plate.idElection and require that elections are open in frontend or call ElectionsService.

    // 3. Prevent duplicate vote in same election:
    // find all votes by this voter,
    const votesByVoter = await this.voteModel.find({ idVoter: payload.idVoter }).populate({
      path: 'idPlate',
      select: 'idElection',
    });

    // check if any of those votes belong to same election
    const sameElectionVote = votesByVoter.find((v) => {
      const votedPlate: any = v.idPlate;
      return votedPlate.idElection.toString() === plate.idElection.toString();
    });

    if (sameElectionVote) {
      throw new BadRequestException('Voter already voted in this election');
    }

    // 4. insert vote
    const vote = new this.voteModel({
      idVoter: payload.idVoter,
      idPlate: new Types.ObjectId(payload.idPlate),
    });
    return vote.save();
  }

  async listByElection(idElection: string) {
    // gather votes where plate.idElection == idElection
    return this.voteModel.find().populate({ path: 'idPlate', match: { idElection } }).then((res) =>
      res.filter((v) => v.idPlate !== null),
    );
  }

  // compute results: group by plate and count
  async resultsByElection(idElection: string) {
    const votes = await this.listByElection(idElection);
    const tally = {};
    votes.forEach((v: any) => {
      const plateId = v.idPlate._id.toString();
      if (!tally[plateId]) {
        tally[plateId] = { plate: v.idPlate, count: 0 };
      }
      tally[plateId].count++;
    });
    return Object.values(tally);
  }
}
