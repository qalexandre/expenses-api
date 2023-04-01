import { Expense } from '@app/entities/expense';

export class ExpenseViewModel {
  static toHTTP(expense: Expense) {
    return {
      id: expense.id,
      name: expense.name,
      value: expense.value,
      type: expense.type,
      userId: expense.userId,
    };
  }
}
