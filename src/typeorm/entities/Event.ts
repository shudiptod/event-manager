import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
