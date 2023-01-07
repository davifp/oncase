import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHolderDto {
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  part: number;
}
