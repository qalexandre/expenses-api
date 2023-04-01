import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddValueExpenseBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  value: number;
}
