import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ElectionDocument = Election & Document;

@Schema({ timestamps: true })
export class Election {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ required: true, default: 'open' })
  status: 'open' | 'closed';
}

export const ElectionSchema = SchemaFactory.createForClass(Election);
