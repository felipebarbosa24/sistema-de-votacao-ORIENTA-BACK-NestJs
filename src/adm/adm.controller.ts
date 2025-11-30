import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AdmService } from './adm.service';
import { CreateAdmDto } from './dto/create-adm.dto';

@Controller('adm')
export class AdmController {
  constructor(private auth: AuthService, private admSvc: AdmService) {}

  // criar admin (opcional: em produção proteger isso)
  @Post('create')
  async create(@Body() dto: CreateAdmDto) {
    return this.admSvc.create(dto);
  }

  // login retorna JWT
  @Post('login')
  async login(@Body() body: { name: string; password: string }) {
    const admin = await this.admSvc.validateAdmin(body.name, body.password);
    if (!admin) return { error: 'invalid' };
    return this.auth.login(admin);
  }
}
