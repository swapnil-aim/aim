import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { CreateChapterDao } from './dto/create-chapter-dto';

@Controller('chapters')
export class ChaptersController {
  private readonly logger = new Logger('ChapterController');
  constructor(private readonly chapterService: ChaptersService) {}

  @Get('/')
  public async getChapters() {
    this.logger.log('GET_CHAPTERS');
    return await this.chapterService.getChapters();
  }

  @Post('/')
  public async addResource(@Body() body: CreateChapterDao) {
    this.logger.log('ADD_CHAPTER', JSON.stringify(body));
    const { name, subject_id: subjectId, resource_id: resourceId } = body;
    return await this.chapterService.addChapter(name, subjectId, resourceId);
  }
}
