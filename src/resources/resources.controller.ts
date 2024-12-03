import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource-dto';

@Controller('resources')
export class ResourcesController {
  private readonly logger = new Logger('ResourcesController');
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get('/')
  public async getResources(@Query('subjectId') subjectId: string) {
    this.logger.log('GET_RESOURCES');
    console.log('subjectId ===>', subjectId);
    return await this.resourcesService.getResources(subjectId);
  }

  @Post('/')
  public async addResource(@Body() body: CreateResourceDto) {
    this.logger.log('ADD_RESOURCE', JSON.stringify(body));
    const { name, subject_id: subjectId, instructor, course } = body;
    return await this.resourcesService.addResource(
      name,
      subjectId,
      instructor,
      course,
    );
  }
}
