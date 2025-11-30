import { Controller, Post, Body, Get, Query, Delete, Param } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { CreatePlateDto } from './dto/create-plate.dto';

@Controller('plates')
export class PlatesController {
  constructor(private svc: PlatesService) {}

  @Post()
  create(@Body() payload: CreatePlateDto) {
    return this.svc.create(payload);
  }

  @Get()
  list(@Query('idElection') idElection: string) {
    return this.svc.findByElection(idElection || null);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
