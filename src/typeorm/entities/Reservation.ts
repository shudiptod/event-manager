import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Workshop } from './Workshop';

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Workshop, (workshop) => workshop.reservations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'workshop_id' })
  workshop: Workshop;
}
