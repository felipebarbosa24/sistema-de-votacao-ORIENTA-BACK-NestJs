import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { VotesService } from './votes.service';

@Controller('votes')
export class VotesController {
  constructor(private svc: VotesService) {}

  @Post()
  register(@Body() payload: { idVoter: string; idPlate: string }) {
    return this.svc.registerVote(payload);
  }

  @Get()
  listByElection(@Query('idElection') idElection: string) {
    return this.svc.listByElection(idElection);
  }

  @Get('results')
  results(@Query('idElection') idElection: string) {
    return this.svc.resultsByElection(idElection);
  }
}
