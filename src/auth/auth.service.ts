import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdmService } from '../adm/adm.service';

@Injectable()
export class AuthService {
  constructor(private admSvc: AdmService, private jwtService: JwtService) {}

  async validateAdmin(name: string, pass: string) {
    return this.admSvc.validateAdmin(name, pass);
  }

  async login(admin: any) {
    const payload = { username: admin.name, sub: admin._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
