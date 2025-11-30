import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVoteDto {
  @IsString() @IsNotEmpty() idVoter: string;
  @IsString() @IsNotEmpty() idPlate: string;
}
