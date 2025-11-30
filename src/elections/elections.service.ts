import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Election, ElectionDocument } from './schemas/election.schema';
import { CreateElectionDto } from './dto/create-election.dto';

@Injectable()
export class ElectionsService {
  constructor(
    @InjectModel(Election.name) private electionModel: Model<ElectionDocument>,
  ) {}

  async create(dto: CreateElectionDto) {
    const doc = new this.electionModel({ ...dto, status: 'open' });
    return doc.save();
  }

  async findAll() {
    return this.electionModel.find().lean();
  }

  async findOne(id: string) {
    const e = await this.electionModel.findById(id).lean();
    if (!e) throw new NotFoundException('Election not found');
    return e;
  }

  async update(id: string, payload: Partial<CreateElectionDto>) {
    const e = await this.electionModel.findByIdAndUpdate(id, payload, { new: true }).lean();
    if (!e) throw new NotFoundException('Election not found');
    return e;
  }

  async remove(id: string) {
    return this.electionModel.findByIdAndDelete(id);
  }

  async closeElection(id: string) {
    const e = await this.electionModel.findByIdAndUpdate(id, { status: 'closed' }, { new: true }).lean();
    if (!e) throw new NotFoundException('Election not found');
    return e;
  }
}
