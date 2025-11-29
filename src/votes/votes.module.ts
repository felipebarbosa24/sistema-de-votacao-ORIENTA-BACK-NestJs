import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vote, VoteSchema } from './schemas/vote.schema';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { PlatesModule } from '../plates/plates.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
    PlatesModule, // import necessário para usar PlatesService
  ],
  providers: [VotesService],
  controllers: [VotesController],
})
export class VotesModule {}
