import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Adm, AdmDocument } from './schemas/adm.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdmService {
  constructor(@InjectModel(Adm.name) private admModel: Model<AdmDocument>) {}

  async create(payload: { name: string; password: string }) {
    const hash = await bcrypt.hash(payload.password, 10);
    const a = new this.admModel({ name: payload.name, password: hash });
    return a.save();
  }

  async validateAdmin(name: string, password: string) {
    const adm = await this.admModel.findOne({ name });
    if (!adm) return null;
    const ok = await bcrypt.compare(password, adm.password);
    if (!ok) return null;
    return adm;
  }
}
