import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Workshop } from './Workshop';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column({ type: 'datetime', nullable: true })
  start_at: Date;

  @Column({ type: 'datetime', nullable: true })
  end_at: Date;

  @OneToMany(() => Workshop, (workshop) => workshop.event, { cascade: true })
  @JoinColumn()
  workshops: Workshop[];
}
