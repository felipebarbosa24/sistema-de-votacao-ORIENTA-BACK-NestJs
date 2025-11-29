import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Adm, AdmSchema } from './schemas/adm.schema';
import { AdmService } from './adm.service';
import { AdmController } from './adm.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Adm.name, schema: AdmSchema }]),
  ],
  providers: [AdmService],
  controllers: [AdmController],
})
export class AdmModule {}
