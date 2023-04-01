import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UsersControllers } from './controllers/users.controller';
import { CreateUser } from '@app/use-cases/user/create-user';
import { GetUser } from '@app/use-cases/user/get-user';
import { AddValueExpense } from '@app/use-cases/expense/add-value-expense';
import { CreateExpense } from '@app/use-cases/expense/create-expense';
import { DeleteExpense } from '@app/use-cases/expense/delete-expense';
import { GetExpense } from '@app/use-cases/expense/get-expense';
import { GetUserExpense } from '@app/use-cases/expense/get-user-expenses';
import { ExpensesController } from './controllers/expenses.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersControllers, ExpensesController],
  providers: [
    CreateUser,
    GetUser,
    AddValueExpense,
    CreateExpense,
    DeleteExpense,
    GetExpense,
    GetUserExpense,
  ],
})
export class HttpModule {}
