import { UpdateReservationDto } from './../../dtos/UpdateReservationDto';
import { CreateReservationDto } from './../../dtos/CreateReservationDto';
import { ReservationsService } from './../../services/reservations/reservations.service';
import {
  Controller,
  Get,
  Post,
  Query,
  ParseIntPipe,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) { }

  @Get()
  async getReservations() {
    const reservations = await this.reservationsService.findReservations();
    return reservations;
  }

  @Post()
  createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ) {
    const { workshop_id, name, email } = createReservationDto;
    return this.reservationsService.createReservation(
      workshop_id, { name, email }
    );
  }

  @Put(':id')
  updateReservationById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.updateReservation(id, updateReservationDto);
  }

  @Delete(':id')
  deleteReservationById(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.deleteReservation(id);
  }
}
