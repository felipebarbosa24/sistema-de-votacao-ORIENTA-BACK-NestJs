import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectionsModule } from './elections/elections.module';
import { PlatesModule } from './plates/plates.module';
import { VotersModule } from './voters/voters.module';
import { VotesModule } from './votes/votes.module';
import { AdmModule } from './adm/adm.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/facepe-orienta'),
    ElectionsModule,
    PlatesModule,
    VotersModule,
    VotesModule,
    AdmModule,
    AuthModule,
  ],
})
export class AppModule {}
