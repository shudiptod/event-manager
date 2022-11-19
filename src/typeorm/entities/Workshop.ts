import { Reservation } from './Reservation';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Event } from './Event';

@Entity({ name: 'workshops' })
export class Workshop {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'datetime', nullable: true })
  start_at: Date;

  @Column({ type: 'datetime', nullable: true })
  end_at: Date;

  @ManyToOne(() => Event, (event) => event.workshops, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @OneToMany(() => Reservation, (reservation) => reservation.workshop, {
    cascade: true,
  })
  @JoinColumn({ name: 'workshop_id' })
  reservations: Reservation[];
}
