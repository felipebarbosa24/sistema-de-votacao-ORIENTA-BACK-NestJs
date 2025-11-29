import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plate, PlateDocument } from './schemas/plate.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class PlatesService {
  constructor(@InjectModel(Plate.name) private plateModel: Model<PlateDocument>) {}

  create(payload: { idElection: string; name: string; number: number }) {
    const p = new this.plateModel({ ...payload, idElection: new Types.ObjectId(payload.idElection) });
    return p.save();
  }

  findByElection(idElection: string) {
    return this.plateModel.find({ idElection }).lean();
  }

  remove(id: string) {
    return this.plateModel.findByIdAndDelete(id);
  }

  async findOne(id: string) {
    const p = await this.plateModel.findById(id);
    if (!p) throw new NotFoundException('Plate not found');
    return p;
  }
}
