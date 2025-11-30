import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVoterDto {
  @IsString() @IsNotEmpty() cpf: string;
  @IsString() @IsNotEmpty() name: string;
}
