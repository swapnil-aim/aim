import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Chapter } from './chapters.entity';

@Injectable()
export class ChapterRepository extends Repository<Chapter> {
  constructor(private dataSource: DataSource) {
    super(Chapter, dataSource.createEntityManager());
  }
}
