import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vote, VoteDocument } from './schemas/vote.schema';
import { Model, Types } from 'mongoose';
import { PlatesService } from '../plates/plates.service';
import { ElectionsService } from '../elections/elections.service';

@Injectable()
export class VotesService {
  constructor(
    @InjectModel(Vote.name) private voteModel: Model<VoteDocument>,
    private platesService: PlatesService,
    private electionsService: ElectionsService,
  ) {}

  // Registra voto: garante que a eleição esteja aberta e evita duplicate via índice único
  async registerVote(payload: { idVoter: string; idPlate: string }) {
    // 1. busca plate
    const plate = await this.platesService.findOne(payload.idPlate);
    if (!plate) throw new NotFoundException('Plate not found');

    // 2. pega election id da plate
    const idElection = (plate.idElection as any).toString();

    // 3. verifica se eleição está aberta
    const election = await this.electionsService.findOne(idElection);
    if (!election) throw new NotFoundException('Election not found');
    if (election.status !== 'open') {
      throw new BadRequestException('Election is not open');
    }

    // 4. tenta inserir vote. índice único vai assegurar atomicamente que não haja duplicates
    try {
      const vote = new this.voteModel({
        idVoter: payload.idVoter,
        idPlate: new Types.ObjectId(payload.idPlate),
        idElection: new Types.ObjectId(idElection),
      });
      return await vote.save();
    } catch (err: any) {
      // se erro de conflito único, retorna mensagem amigável
      if (err && err.code === 11000) {
        throw new BadRequestException('Voter already voted in this election');
      }
      throw err;
    }
  }

  // lista votos por eleição
  async listByElection(idElection: string) {
    return this.voteModel.find({ idElection }).populate('idPlate').lean();
  }

  // resultados agregados por plate
  async resultsByElection(idElection: string) {
    const votes = await this.voteModel.find({ idElection }).populate('idPlate').lean();
    const tally: Record<string, { plate: any; count: number }> = {};
    votes.forEach((v: any) => {
      const pid = v.idPlate?._id?.toString();
      if (!pid) return;
      if (!tally[pid]) tally[pid] = { plate: v.idPlate, count: 0 };
      tally[pid].count++;
    });
    return Object.values(tally);
  }
}
