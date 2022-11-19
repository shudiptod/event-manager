import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WorkshopsController } from './controllers/workshops/workshops.controller';
import { WorkshopsService } from './services/workshops/workshops.service';
import { Workshop } from 'src/typeorm/entities/Workshop';
import { Event } from 'src/typeorm/entities/Event';
import { Reservation } from 'src/typeorm/entities/Reservation';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop, Event, Reservation])],
  controllers: [WorkshopsController],
  providers: [WorkshopsService],
})
export class WorkshopsModule {}
