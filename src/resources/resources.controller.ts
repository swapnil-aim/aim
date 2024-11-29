import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource-dto';

@Controller('resources')
export class ResourcesController {
  private readonly logger = new Logger('ResourcesController');
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get('/')
  public async getResources() {
    this.logger.log('GET_RESOURCES');
    return await this.resourcesService.getResources();
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
