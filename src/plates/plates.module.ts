import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Plate, PlateSchema } from './schemas/plate.schema';
import { PlatesService } from './plates.service';
import { PlatesController } from './plates.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plate.name, schema: PlateSchema }]),
  ],
  providers: [PlatesService],
  controllers: [PlatesController],
  exports: [PlatesService], // importante para VotesModule
})
export class PlatesModule {}
