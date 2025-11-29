import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Election } from '../../elections/schemas/election.schema';

export type PlateDocument = Plate & Document;

@Schema()
export class Plate {
  @Prop({ type: Types.ObjectId, ref: 'Election', required: true })
  idElection: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  number: number;
}

export const PlateSchema = SchemaFactory.createForClass(Plate);
