import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Resource } from './resources.entity';

@Injectable()
export class ResourceRepository extends Repository<Resource> {
  constructor(private dataSource: DataSource) {
    super(Resource, dataSource.createEntityManager());
  }
}
