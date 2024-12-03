import { Injectable } from '@nestjs/common';
import { ObjectId as ObjectID } from 'mongodb';
import { QuestionsRepository } from './questions.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './questions.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionsRepository)
    private readonly questionsRepository: QuestionsRepository,
  ) {}
  public async getQuestions(
    subjectId: string,
    resourceId: string,
    chapterId: string,
  ): Promise<Question[]> {
    return await this.questionsRepository.find({
      where: {
        subject_id: new ObjectID(subjectId),
        resource_id: new ObjectID(resourceId),
        chapter_id: new ObjectID(chapterId),
      },
    });
  }

  public async addQuestion(
    title: string,
    description: string,
    subjectId: string,
    resourceId: string,
    chapterId: string,
  ): Promise<Question> {
    const questionToBeInserted = {
      title,
      description,
      subject_id: new ObjectID(subjectId),
      resource_id: new ObjectID(resourceId),
      chapter_id: new ObjectID(chapterId),
      completed: false,
    };
    return await this.questionsRepository.save(questionToBeInserted);
  }
}
