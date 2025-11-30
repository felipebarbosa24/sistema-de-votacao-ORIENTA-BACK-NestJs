import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateElectionDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() @IsOptional() description?: string;
  @IsString() @IsNotEmpty() startDate: string;
  @IsString() @IsNotEmpty() endDate: string;
}
