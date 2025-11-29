import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VotersService } from './voters.service';

@Controller('voters')
export class VotersController {
  constructor(private svc: VotersService) {}

  @Post()
  create(@Body() payload: { cpf: string; name: string }) {
    return this.svc.create(payload);
  }

  @Get()
  list() {
    return this.svc.findAll();
  }

  @Get(':cpf')
  detail(@Param('cpf') cpf: string) {
    return this.svc.findOne(cpf);
  }
}
