import { Expense, ExpenseType } from '@app/entities/expense';
import { ExpensesRepository } from '@app/repositories/expense-repository';
import { Injectable } from '@nestjs/common';

interface CreateExpenseRequest {
  name: string;
  icon: string;
  type: ExpenseType;
  userId: string;
}

interface CreateExpenseResponse {
  expense: Expense;
}

@Injectable()
export class CreateExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(request: CreateExpenseRequest): Promise<CreateExpenseResponse> {
    const { icon, name, type, userId } = request;

    const expense = new Expense({ icon, name, type, userId }, {});

    await this.expensesRepository.create(expense);

    return { expense };
  }
}
