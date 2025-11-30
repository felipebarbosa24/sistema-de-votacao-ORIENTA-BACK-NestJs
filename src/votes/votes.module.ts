import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vote, VoteSchema } from './schemas/vote.schema';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { PlatesModule } from '../plates/plates.module';
import { ElectionsModule } from '../elections/elections.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
    PlatesModule,
    ElectionsModule,
  ],
  providers: [VotesService],
  controllers: [VotesController],
})
export class VotesModule {}
