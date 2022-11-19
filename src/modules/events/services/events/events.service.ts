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
    return this.eventRepository.find();
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

  // Task services

  async findEventDetails(id:number){
    const event = await this.eventRepository.findOne({where:{id: id}, relations: ['workshops'] });
    const total_workshops = event.workshops.length;
    delete event.workshops;
    let detailedEvent = {
      ...event,
      total_workshops
    }
    return detailedEvent;
  }
  async findActiveWorkshops(id:number){
    const event = await this.eventRepository.findOne({where:{id: id}, relations: ['workshops'] });
    const currentDateTime = new Date().getTime();
    let activeWorkshops = [];
    for(let workshop of event.workshops){
      let workshopStarts = new Date(workshop.start_at).getTime();
      if(currentDateTime - workshopStarts <0){
        activeWorkshops.push(workshop)
      }
    }
    return {...event, workshops:activeWorkshops};
  }
}
