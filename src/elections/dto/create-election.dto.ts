import { IsString, IsNotEmpty } from 'class-validator';

export class CreateElectionDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() description?: string;
  @IsString() @IsNotEmpty() startDate: string;
  @IsString() @IsNotEmpty() endDate: string;
}
