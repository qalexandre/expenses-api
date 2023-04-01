import { ExpenseType } from '@app/entities/expense';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateExpenseBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  icon: string;

  @IsNotEmpty()
  type: ExpenseType;

  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
