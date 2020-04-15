import { IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  public user_name: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;
}
