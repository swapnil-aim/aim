import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';
import { ResourcesModule } from './resources/resources.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { Subject } from './subjects/subject.entity';
import { ChaptersModule } from './chapters/chapters.module';

@Module({
  imports: [
    SubjectsModule,
    ResourcesModule,
    TechnologiesModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'aim',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Subject],
      useUnifiedTopology: true,
    }),
    ChaptersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
