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
} from '@nestjs/common';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

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
}
