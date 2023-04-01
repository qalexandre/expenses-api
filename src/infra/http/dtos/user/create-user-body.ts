import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @Length(4)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}
