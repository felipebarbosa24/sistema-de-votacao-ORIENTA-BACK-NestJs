import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AdmService } from './adm.service';

@Controller('adm')
export class AdmController {
  constructor(private auth: AuthService, private admSvc: AdmService) {}

  @Post('login')
  async login(@Body() body: { name: string; password: string }) {
    const admin = await this.admSvc.validateAdmin(body.name, body.password);
    if (!admin) return { error: 'invalid' };
    return this.auth.login(admin);
  }

  // additional admin endpoints (create admin) can be protected later
}
