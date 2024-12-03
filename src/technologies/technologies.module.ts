import { Module } from '@nestjs/common';
import { TechnologyController } from './technologies.controller';
import { TechnologyService } from './technologies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technology } from './technologies.entity';
import { TechnologyRepository } from './technologies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Technology])],
  controllers: [TechnologyController],
  providers: [TechnologyService, TechnologyRepository],
})
export class TechnologiesModule {}
