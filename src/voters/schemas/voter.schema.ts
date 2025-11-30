import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoterDocument = Voter & Document;

@Schema()
export class Voter {
  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true })
  name: string;
}

export const VoterSchema = SchemaFactory.createForClass(Voter);
