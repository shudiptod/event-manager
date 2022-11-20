import { UpdateWorkshopDto } from './../../dtos/UpdateWorkshopDto';
import { CreateWorkshopDto } from './../../dtos/CreateWorkshopDto';
import { WorkshopsService } from './../../services/workshops/workshops.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Param,
} from '@nestjs/common';

@Controller('workshops')
export class WorkshopsController {
  constructor(private workshopsService: WorkshopsService) { }

  @Get()
  async getWorkshops() {
    const workshops = await this.workshopsService.findWorkshops();
    return workshops;
  }

  @Post()
  createWorkshop(@Body() createWorkshopDto: CreateWorkshopDto) {
    return this.workshopsService.createWorkshop(createWorkshopDto);
  }

  @Put(':id')
  updateWorkshopById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWorkshopDto: UpdateWorkshopDto,
  ) {
    return this.workshopsService.updateWorkshop(id, updateWorkshopDto);
  }

  @Delete(':id')
  deleteWorkshopById(@Param('id', ParseIntPipe) id: number) {
    return this.workshopsService.deleteWorkshop(id);
  }

  @Get(':id')
  getWorkshopDetails(@Param('id', ParseIntPipe) id: number) {
    return this.workshopsService.findWorkshopDetails(id);
  }
}
