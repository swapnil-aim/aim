import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Technology } from './technologies.entity';

@Injectable()
export class TechnologyRepository extends Repository<Technology> {
  constructor(private dataSource: DataSource) {
    super(Technology, dataSource.createEntityManager());
  }
}
