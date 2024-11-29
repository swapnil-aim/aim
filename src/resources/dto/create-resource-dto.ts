import { IsNotEmpty } from 'class-validator';

export class CreateResourceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  subject_id: string;
  instructor: string;
  course: string;
}
