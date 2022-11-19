import { Reservation } from './../../typeorm/entities/Reservation';
import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { EventsService } from './services/events/events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Workshop } from 'src/typeorm/entities/Workshop';
@Module({
  imports: [TypeOrmModule.forFeature([Event, Workshop, Reservation])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
