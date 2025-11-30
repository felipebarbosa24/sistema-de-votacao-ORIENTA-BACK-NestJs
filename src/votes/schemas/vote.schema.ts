import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type VoteDocument = Vote & Document;

@Schema({ timestamps: true })
export class Vote {
  @Prop({ required: true })
  idVoter: string;

  @Prop({ type: Types.ObjectId, ref: 'Plate', required: true })
  idPlate: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Election', required: true })
  idElection: Types.ObjectId;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);

// índice único para evitar votações duplicadas por (cpf + election)
VoteSchema.index({ idVoter: 1, idElection: 1 }, { unique: true });
