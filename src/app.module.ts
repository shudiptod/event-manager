import { Workshop } from './typeorm/entities/Workshop';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './typeorm/entities/Event';
import { EventsModule } from './modules/events/events.module';
import { WorkshopsModule } from './modules/workshops/workshops.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { Reservation } from './typeorm/entities/Reservation';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'event_manager',
      username: 'root',
      password: 'root',
      entities: [Event, Workshop, Reservation],
      synchronize: true,
    }),
    EventsModule,
    WorkshopsModule,
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
