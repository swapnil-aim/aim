import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  title: string;

  description: string;

  @IsNotEmpty()
  subject_id: string;

  @IsNotEmpty()
  resource_id: string;
  @IsNotEmpty()
  chapter_id: string;
}
