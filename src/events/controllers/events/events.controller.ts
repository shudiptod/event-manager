import { EventsService } from './../../services/events/events.service';
import { CreateEventDto } from './../../dtos/CreateEvent.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

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
    console.log(
      '🚀 ~ file: events.controller.ts ~ line 17 ~ EventsController ~ createEvents ~ @Body()',
      Body,
    );
    console.log(
      '🚀 ~ file: events.controller.ts ~ line 17 ~ EventsController ~ createEvents ~ createEventDto',
      createEventDto,
    );
    return this.eventsService.createEvents(createEventDto);
  }
}
