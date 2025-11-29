import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdmDocument = Adm & Document;

@Schema()
export class Adm {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  password: string; // hashed
}

export const AdmSchema = SchemaFactory.createForClass(Adm);
