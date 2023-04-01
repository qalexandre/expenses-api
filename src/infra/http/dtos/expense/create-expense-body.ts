import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateExpenseBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  icon: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
