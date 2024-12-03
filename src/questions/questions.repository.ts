import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Question } from './questions.entity';

@Injectable()
export class QuestionsRepository extends Repository<Question> {
  constructor(private dataSource: DataSource) {
    super(Question, dataSource.createEntityManager());
  }
}
