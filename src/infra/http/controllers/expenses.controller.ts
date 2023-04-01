import { AddValueExpense } from '@app/use-cases/expense/add-value-expense';
import { CreateExpense } from '@app/use-cases/expense/create-expense';
import { DeleteExpense } from '@app/use-cases/expense/delete-expense';
import { GetExpense } from '@app/use-cases/expense/get-expense';
import { GetUserExpense } from '@app/use-cases/expense/get-user-expenses';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddValueExpenseBody } from '../dtos/expense/add-value-expense-body';
import { CreateExpenseBody } from '../dtos/expense/create-expense-body';
import { ExpenseViewModel } from '../view-models/expense-view-model';

@Controller('expenses')
export class ExpensesController {
  constructor(
    private createExpense: CreateExpense,
    private getExpense: GetExpense,
    private getUserExpense: GetUserExpense,
    private addValueExpense: AddValueExpense,
    private deleteExpense: DeleteExpense,
  ) {}

  @Get(':id')
  async getById(@Param('id') id: string) {
    const { expense } = await this.getExpense.execute({ expenseId: id });

    return { expense: ExpenseViewModel.toHTTP(expense) };
  }

  @Get('from/:userId')
  async getFromUser(@Param('userId') userId: string) {
    const { expenses } = await this.getUserExpense.execute({ userId });

    return { expenses: expenses.map(ExpenseViewModel.toHTTP) };
  }

  @Patch('value')
  async addValue(@Body() body: AddValueExpenseBody) {
    const { id, value } = body;
    await this.addValueExpense.execute({ expenseId: id, value });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteExpense.execute({ expenseId: id });
  }

  @Post()
  async create(@Body() body: CreateExpenseBody) {
    const { expense } = await this.createExpense.execute(body);

    return { expense: ExpenseViewModel.toHTTP(expense) };
  }
}
