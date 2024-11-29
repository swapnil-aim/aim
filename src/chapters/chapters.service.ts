import { Injectable } from '@nestjs/common';
import { ObjectId as ObjectID } from 'mongodb';
import { ChapterRepository } from './chapters.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Chapter } from './chapters.entity';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(ChapterRepository)
    private readonly chapterRepository: ChapterRepository,
  ) {}
  public async getChapters(): Promise<Chapter[]> {
    return await this.chapterRepository.find({});
  }

  public async addChapter(
    name: string,
    subjectId: string,
    resourceId: string,
  ): Promise<Chapter> {
    const chapterToBeInserted = {
      name,
      subject_id: new ObjectID(subjectId),
      resource_id: new ObjectID(resourceId),
    };
    return await this.chapterRepository.save(chapterToBeInserted);
  }
}
