import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Voter, VoterDocument } from './schemas/voter.schema';
import { Model } from 'mongoose';

@Injectable()
export class VotersService {
  constructor(@InjectModel(Voter.name) private voterModel: Model<VoterDocument>) {}

  async create(payload: { cpf: string; name: string }) {
    const v = new this.voterModel(payload);
    return v.save();
  }

  async findAll() {
    return this.voterModel.find().lean();
  }

  async findOne(cpf: string) {
    const v = await this.voterModel.findOne({ cpf }).lean();
    if (!v) throw new NotFoundException('Voter not found');
    return v;
  }
}
