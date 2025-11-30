import { IsString, IsNotEmpty, IsMongoId, IsNumber } from 'class-validator';

export class CreatePlateDto {
  @IsMongoId() @IsNotEmpty() idElection: string;
  @IsString() @IsNotEmpty() name: string;
  @IsNumber() @IsNotEmpty() number: number;
}
