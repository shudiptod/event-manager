import { UpdateEventParams } from '../../../../utils/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { CreateEventParams } from 'src/utils/types';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  findEvents() {
    return this.eventRepository.find({ relations: ['workshops'] });
  }

  createEvents(eventDetails: CreateEventParams) {
    const newEvent = this.eventRepository.create({ ...eventDetails });

    return this.eventRepository.save(newEvent);
  }

  updateEvent(id: number, updateEventDetails: UpdateEventParams) {
    return this.eventRepository.update({ id }, { ...updateEventDetails });
  }

  deleteEvent(id: number) {
    return this.eventRepository.delete({ id });
  }
}
