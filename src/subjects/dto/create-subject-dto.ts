import { IsNotEmpty } from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  name: string;
}
