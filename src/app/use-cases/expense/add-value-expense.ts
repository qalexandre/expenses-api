import { ExpensesRepository } from '@app/repositories/expense-repository';
import { Injectable } from '@nestjs/common';
import { ExpenseNotFound } from './errors/expense-not-found';

interface AddValueExpenseRequest {
  expenseId: string;
  value: number;
}

type AddValueExpenseResponse = void;

@Injectable()
export class AddValueExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(
    request: AddValueExpenseRequest,
  ): Promise<AddValueExpenseResponse> {
    const { expenseId, value } = request;

    const expense = await this.expensesRepository.findById(expenseId);

    if (!expense) {
      throw new ExpenseNotFound();
    }

    expense.addValue(value);

    await this.expensesRepository.save(expense);
  }
}
