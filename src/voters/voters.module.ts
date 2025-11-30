import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Voter, VoterSchema } from './schemas/voter.schema';
import { VotersService } from './voters.service';
import { VotersController } from './voters.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Voter.name, schema: VoterSchema }])],
  providers: [VotersService],
  controllers: [VotersController],
  exports: [VotersService],
})
export class VotersModule {}
