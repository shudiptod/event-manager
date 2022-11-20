import { UpdateEventDto } from '../../dtos/UpdateEvent.dto';
import { EventsService } from '../../services/events/events.service';
import { CreateEventDto } from '../../dtos/CreateEvent.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) { }

  // basic CRUD API starts

  @Get()
  async getEvents() {
    const events = await this.eventsService.findEvents();
    return events;
  }

  @Post()
  createEvents(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvents(createEventDto);
  }

  @Put(':id')
  updateEventById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.updateEvent(id, updateEventDto);
  }

  @Delete(':id')
  deleteEventById(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.deleteEvent(id);
  }

  // basic CRUD API ends

  // Task Endpoints begin

  @Get('/active')
  getActiveEventsWithPagination(
    @Query('per_page', ParseIntPipe) per_page: number,
    @Query('current_page', ParseIntPipe) current_page: number,
  ) {
    return this.eventsService.findActiveEventsWithPagination({ per_page, current_page })
  }

  @Get(':id')
  getEventDetails(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.findEventDetails(id);
  }

  @Get(':id/workshops/active')
  getActiveWorkshops(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.findActiveWorkshops(id);
  }
}
