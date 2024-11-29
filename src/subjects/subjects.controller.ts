import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject-dto';

@Controller('subjects')
export class SubjectsController {
  private readonly logger = new Logger('SubjectsController');
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get('/')
  public async getSubjects() {
    this.logger.log('GET_SUBJECTS');
    return await this.subjectsService.getSubjects();
  }

  @Post('/')
  public async addSubject(@Body() body: CreateSubjectDto) {
    this.logger.log('ADD_SUBJECTS', JSON.stringify(body));
    const { name } = body;
    return await this.subjectsService.addSubject(name);
  }
}
