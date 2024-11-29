import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './chapters.entity';
import { ChapterRepository } from './chapters.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  providers: [ChaptersService, ChapterRepository],
  controllers: [ChaptersController],
})
export class ChaptersModule {}
