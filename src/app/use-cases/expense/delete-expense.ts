import { ExpensesRepository } from '@app/repositories/expense-repository';
import { Injectable } from '@nestjs/common';

interface DeleteExpenseRequest {
  expenseId: string;
}

type DeleteExpenseResponse = void;

@Injectable()
export class DeleteExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(request: DeleteExpenseRequest): Promise<DeleteExpenseResponse> {
    const { expenseId } = request;

    await this.expensesRepository.delete(expenseId);
  }
}
