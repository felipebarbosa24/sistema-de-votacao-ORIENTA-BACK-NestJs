import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElectionsModule } from './elections/elections.module';
import { PlatesModule } from './plates/plates.module';
import { VotersModule } from './voters/voters.module';
import { VotesModule } from './votes/votes.module';
import { AdmModule } from './adm/adm.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ElectionsModule, PlatesModule, VotersModule, VotesModule, AdmModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
