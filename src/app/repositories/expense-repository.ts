import { Expense } from '@app/entities/expense';

export abstract class ExpensesRepository {
  abstract create(expense: Expense): Promise<void>;
  abstract findById(expenseId: string): Promise<Expense | null>;
  abstract save(expense: Expense): Promise<void>;
  abstract countManyByUserId(userId: string): Promise<number>;
  abstract findManyByUSerId(userId: string): Promise<Expense[]>;
}
