import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workshop } from 'src/typeorm/entities/Workshop';
import { CreateWorkshopParams, UpdateWorkshopParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class WorkshopsService {
  constructor(
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
  ) {}

  findWorkshops() {
    return this.workshopRepository.find();
  }

  createWorkshop(workshopDetails: CreateWorkshopParams) {
    const newWorkshop = this.workshopRepository.create({ ...workshopDetails });
    return this.workshopRepository.save(newWorkshop);
  }

  updateWorkshop(id: number, updateWorkshopDetails: UpdateWorkshopParams) {
    return this.workshopRepository.update({ id }, { ...updateWorkshopDetails });
  }

  deleteWorkshop(id: number) {
    return this.workshopRepository.delete({ id });
  }
}
