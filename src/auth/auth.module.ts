import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AdmModule } from '../adm/adm.module';
import { JwtStrategy } from './jwt.strategy';
import * as dotenv from 'dotenv';
dotenv.config();

const expiresIn =
  process.env.JWT_EXPIRES_IN
    ? Number(process.env.JWT_EXPIRES_IN)
    : 3600;

@Module({
  imports: [
    forwardRef(() => AdmModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
