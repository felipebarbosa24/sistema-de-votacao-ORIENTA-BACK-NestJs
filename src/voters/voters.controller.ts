import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VotersService } from './voters.service';
import { CreateVoterDto } from './dto/create-voter.dto';

@Controller('voters')
export class VotersController {
  constructor(private svc: VotersService) {}

  @Post()
  create(@Body() payload: CreateVoterDto) {
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
