import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Controller('votes')
export class VotesController {
  constructor(private svc: VotesService) {}

  @Post()
  register(@Body() payload: CreateVoteDto) {
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
