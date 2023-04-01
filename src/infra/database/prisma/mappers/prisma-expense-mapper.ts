import { Expense, ExpenseType } from '@app/entities/expense';
import { Expense as RawExpense } from '@prisma/client';

export class PrismaExpenseMapper {
  static toPrisma(expense: Expense) {
    return {
      id: expense.id,
      icon: expense.icon,
      name: expense.name,
      type: expense.type,
      userId: expense.userId,
      value: expense.value,
      createdAt: expense.createdAt,
    };
  }

  static toDomain(raw: RawExpense): Expense {
    return new Expense(
      {
        icon: raw.icon,
        name: raw.name,
        type: raw.type as ExpenseType,
        userId: raw.userId,
        value: raw.value ?? 0,
      },
      { id: raw.id, createdAt: raw.createdAt },
    );
  }
}
