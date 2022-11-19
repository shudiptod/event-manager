import { Reservation } from './../../../../typeorm/entities/Reservation';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from 'src/typeorm/entities/Workshop';
import { CreateWorkshopParams, UpdateWorkshopParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { Event } from 'src/typeorm/entities/Event';

@Injectable()
export class WorkshopsService {
  constructor(
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  findWorkshops() {
    return this.workshopRepository.find();
  }

  async createWorkshop(workshopDetails: CreateWorkshopParams) {
    const { event_id } = workshopDetails;
    const event = await this.eventRepository.findOneBy({ id: event_id });
    if (!event) {
      throw new HttpException(
        'Event not found. Cannot create workshop',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newWorkshop = this.workshopRepository.create({
      ...workshopDetails,
      event: event,
    });
    return this.workshopRepository.save(newWorkshop);
  }

  updateWorkshop(id: number, updateWorkshopDetails: UpdateWorkshopParams) {
    return this.workshopRepository.update({ id }, { ...updateWorkshopDetails });
  }

  deleteWorkshop(id: number) {
    return this.workshopRepository.delete({ id });
  }
}
