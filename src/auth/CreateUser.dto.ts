import { IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public user_name: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;
}
