import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { TechnologyService } from './technologies.service';
import { CreateTechnologyDto } from './dto/create-technology-dto';

@Controller('technologies')
export class TechnologyController {
  private readonly logger = new Logger('TechnologyController');
  constructor(private readonly technologyService: TechnologyService) {}

  @Get('/')
  public async getTechnologies() {
    this.logger.log('GET_TECHNOLOGIES');
    return await this.technologyService.getTechnologies();
  }

  @Post('/')
  public async addTechnology(@Body() body: CreateTechnologyDto) {
    this.logger.log('ADD_TECHNOLOGIES', JSON.stringify(body));
    const { name, resource } = body;
    return await this.technologyService.addTechnology(name, resource);
  }
}
