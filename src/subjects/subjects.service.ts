import { Injectable } from '@nestjs/common';
import { SubjectRepository } from './subject.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './subject.entity';

const subjects = [];

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(SubjectRepository)
    private readonly subjectRepository: SubjectRepository,
  ) {}
  public async getSubjects(): Promise<Subject[]> {
    return await this.subjectRepository.find({});
  }

  public async addSubject(name: string): Promise<Subject> {
    const subjectToBeInserted = {
      name,
      completed: false,
    };
    return await this.subjectRepository.save(subjectToBeInserted);
  }
}
