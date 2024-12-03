import { Injectable } from '@nestjs/common';
import { TechnologyRepository } from './technologies.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Technology } from './technologies.entity';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(TechnologyRepository)
    private readonly technologyRepository: TechnologyRepository,
  ) {}
  public async getTechnologies(): Promise<Technology[]> {
    return await this.technologyRepository.find({});
  }

  public async addTechnology(
    name: string,
    resource: string,
  ): Promise<Technology> {
    const technologyToBeInserted = {
      name,
      resource,
      completed: false,
    };
    return await this.technologyRepository.save(technologyToBeInserted);
  }
}
