import { IsNotEmpty } from 'class-validator';

export class CreateTechnologyDto {
  @IsNotEmpty()
  technology: string;
}
