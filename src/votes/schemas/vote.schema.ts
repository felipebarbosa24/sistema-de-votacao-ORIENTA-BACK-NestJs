import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type VoteDocument = Vote & Document;

@Schema({ timestamps: true })
export class Vote {
  @Prop({ required: true }) // cpf string
  idVoter: string;

  @Prop({ type: Types.ObjectId, ref: 'Plate', required: true })
  idPlate: Types.ObjectId;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
