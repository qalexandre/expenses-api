import { Expense } from '@app/entities/expense';
import { ExpensesRepository } from '@app/repositories/expense-repository';
import { Injectable } from '@nestjs/common';
import { ExpenseNotFound } from './errors/expense-not-found';

interface GetExpenseRequest {
  expenseId: string;
}

interface GetExpenseResponse {
  expense: Expense;
}

@Injectable()
export class GetExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(request: GetExpenseRequest): Promise<GetExpenseResponse> {
    const { expenseId } = request;

    const expense = await this.expensesRepository.findById(expenseId);

    if (!expense) {
      throw new ExpenseNotFound();
    }

    return { expense };
  }
}
