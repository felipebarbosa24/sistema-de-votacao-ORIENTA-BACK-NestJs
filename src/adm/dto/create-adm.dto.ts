import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAdmDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() password: string;
}
