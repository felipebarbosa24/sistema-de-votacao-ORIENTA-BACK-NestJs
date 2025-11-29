import { Controller, Post, Body, Get, Query, Delete, Param } from '@nestjs/common';
import { PlatesService } from './plates.service';

@Controller('plates')
export class PlatesController {
  constructor(private svc: PlatesService) {}

  @Post()
  create(@Body() payload: { idElection: string; name: string; number: number }) {
    return this.svc.create(payload);
  }

  @Get()
  list(@Query('idElection') idElection: string) {
    if (!idElection) return this.svc.findByElection(null);
    return this.svc.findByElection(idElection);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
