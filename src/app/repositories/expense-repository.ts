import { Expense } from '@app/entities/expense';

export abstract class ExpensesRepository {
  abstract create(expense: Expense): Promise<void>;
  abstract findById(expenseId: string): Promise<Expense | null>;
  abstract save(expense: Expense): Promise<void>;
  abstract countManyByUserId(userId: string): Promise<number>;
  abstract findManyByUserId(userId: string): Promise<Expense[]>;
  abstract delete(expenseId: string): Promise<void>;
}
