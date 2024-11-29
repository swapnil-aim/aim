import { IsNotEmpty } from 'class-validator';

export class CreateChapterDao {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  subject_id: string;

  @IsNotEmpty()
  resource_id: string;
}
