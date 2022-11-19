import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReservationsController } from './controllers/reservations/reservations.controller';
import { ReservationsService } from './services/reservations/reservations.service';
import { Workshop } from 'src/typeorm/entities/Workshop';
import { Event } from 'src/typeorm/entities/Event';
import { Reservation } from 'src/typeorm/entities/Reservation';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Workshop, Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
