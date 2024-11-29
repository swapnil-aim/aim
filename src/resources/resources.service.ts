import { Injectable } from '@nestjs/common';
import { ObjectId as ObjectID } from 'mongodb';
import { ResourceRepository } from './resources.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from './resources.entity';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(ResourceRepository)
    private readonly resourceRepository: ResourceRepository,
  ) {}
  public async getResources(): Promise<Resource[]> {
    return await this.resourceRepository.find({});
  }

  public async addResource(
    name: string,
    subjectId: string,
    instructor: string,
    course: string,
  ): Promise<Resource> {
    const resourceToBeInserted = {
      name,
      subject_id: new ObjectID(subjectId),
      instructor,
      course,
    };
    return await this.resourceRepository.save(resourceToBeInserted);
  }
}
