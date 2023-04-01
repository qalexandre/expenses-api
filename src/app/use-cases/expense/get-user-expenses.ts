import { Expense } from '@app/entities/expense';
import { ExpensesRepository } from '@app/repositories/expense-repository';
import { Injectable } from '@nestjs/common';

interface GetUserExpenseRequest {
  userId: string;
}

interface GetUserExpenseResponse {
  expenses: Expense[];
}

@Injectable()
export class GetUserExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(
    request: GetUserExpenseRequest,
  ): Promise<GetUserExpenseResponse> {
    const { userId } = request;

    const expenses = await this.expensesRepository.findManyByUserId(userId);

    return { expenses };
  }
}
