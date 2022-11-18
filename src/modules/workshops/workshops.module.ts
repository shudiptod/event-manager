import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WorkshopsController } from './controllers/workshops/workshops.controller';
import { WorkshopsService } from './services/workshops/workshops.service';
import { Workshop } from 'src/typeorm/entities/Workshop';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop])],
  controllers: [WorkshopsController],
  providers: [WorkshopsService],
})
export class WorkshopsModule {}
