import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectionsModule } from './elections/elections.module';
import { PlatesModule } from './plates/plates.module';
import { VotersModule } from './voters/voters.module';
import { VotesModule } from './votes/votes.module';
import { AdmModule } from './adm/adm.module';

@Module({
  imports: [
    MongooseModule.forRoot('sua_url_do_mongodb'),
    ElectionsModule,
    PlatesModule,
    VotersModule,
    VotesModule,
    AdmModule,
  ],
})
export class AppModule {}
