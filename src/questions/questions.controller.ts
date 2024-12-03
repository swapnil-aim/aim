import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question-dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  private readonly logger = new Logger('QuestionsController');
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('/')
  public async getQuestions(
    @Query('subjectId') subjectId,
    @Query('resourceId') resourceId,
    @Query('chapterId') chapterId: string,
  ) {
    this.logger.log('GET_QUESTIONS');
    return await this.questionsService.getQuestions(
      subjectId,
      resourceId,
      chapterId,
    );
  }

  @Post('/')
  public async addQuestion(@Body() body: CreateQuestionDto) {
    this.logger.log('ADD_QUESTION', JSON.stringify(body));
    const {
      subject_id: subjectId,
      resource_id: resourceId,
      chapter_id: chapterId,
      title,
      description,
    } = body;
    return await this.questionsService.addQuestion(
      title,
      description,
      subjectId,
      resourceId,
      chapterId,
    );
  }
}
