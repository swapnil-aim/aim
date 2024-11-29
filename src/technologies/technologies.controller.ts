import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologyDto } from './dto/create-technology-dto';

@Controller('technologies')
export class TechnologiesController {
  private readonly logger = new Logger('TechnologiesController');
  constructor(private readonly technologiesService: TechnologiesService) {}
  @Get('/')
  public getSubjects() {
    this.logger.log('GET_SUBJECTS');
    return this.technologiesService.getTechnologies();
  }

  @Post('/')
  public addSubject(@Body() body: CreateTechnologyDto) {
    this.logger.log('ADD_SUBJECTS', JSON.stringify(body));
    const { technology } = body;
    return this.technologiesService.addTechnology(technology);
  }
}
