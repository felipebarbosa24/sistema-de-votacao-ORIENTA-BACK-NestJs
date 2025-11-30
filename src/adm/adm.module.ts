import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Adm, AdmSchema } from './schemas/adm.schema';
import { AdmService } from './adm.service';
import { AdmController } from './adm.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Adm.name, schema: AdmSchema }]),
    forwardRef(() => AuthModule),
  ],
  providers: [AdmService],
  controllers: [AdmController],
  exports: [AdmService],
})
export class AdmModule {}
