import {
  CreateReservationParams,
  UpdateReservationParams,
} from './../../../../utils/types';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Reservation } from 'src/typeorm/entities/Reservation';
import { Workshop } from 'src/typeorm/entities/Workshop';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  findReservations() {
    return this.reservationRepository.find();
  }
  async createReservation(
    workshop_id: number,
    reservationDetails: CreateReservationParams,
  ) {
    const workshop = await this.workshopRepository.findOne({
      where:{id: workshop_id},
      relations:['event']
    });
    if (!workshop) {
      throw new HttpException(
        'Workshop not found. Cannot create reservation',
        HttpStatus.BAD_REQUEST,
      );
    }
    const event = workshop.event;
    delete workshop.event;
    const newReservation = this.reservationRepository.create({
      ...reservationDetails,
      workshop: workshop,
    });
    return this.reservationRepository.save({...newReservation, event:event });
  }
  updateReservation(
    id: number,
    updateReservationDetails: UpdateReservationParams,
  ) {
    return this.reservationRepository.update(
      { id },
      { ...updateReservationDetails },
    );
  }
  deleteReservation(id: number) {
    return this.reservationRepository.delete({ id });
  }
}
