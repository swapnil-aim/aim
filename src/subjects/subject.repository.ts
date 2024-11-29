import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectRepository extends Repository<Subject> {
  constructor(private dataSource: DataSource) {
    super(Subject, dataSource.createEntityManager());
  }
}
