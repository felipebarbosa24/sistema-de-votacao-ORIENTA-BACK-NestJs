import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ElectionsService } from './elections.service';
import { CreateElectionDto } from './dto/create-election.dto';

@Controller('elections')
export class ElectionsController {
  constructor(private svc: ElectionsService) {}

  @Get() list() {
    return this.svc.findAll();
  }

  @Post() create(@Body() dto: CreateElectionDto) {
    return this.svc.create(dto);
  }

  @Get(':id') detail(@Param('id') id: string) {
    return this.svc.findOne(id);
  }

  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<CreateElectionDto>) {
    return this.svc.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }

  @Post(':id/close') close(@Param('id') id: string) {
    return this.svc.closeElection(id);
  }
}
