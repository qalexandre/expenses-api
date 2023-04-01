import { Expense } from '@app/entities/expense';
import { ExpensesRepository } from '@app/repositories/expense-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaExpenseMapper } from '../mappers/prisma-expense-mapper';

@Injectable()
export class PrismaExpensesRepository implements ExpensesRepository {
  constructor(private prisma: PrismaService) {}

  async findById(expenseId: string): Promise<Expense | null> {
    const expense = await this.prisma.expense.findUnique({
      where: { id: expenseId },
    });

    if (!expense) {
      return null;
    }

    return PrismaExpenseMapper.toDomain(expense);
  }

  async findManyByUserId(userId: string): Promise<Expense[]> {
    const expense = await this.prisma.expense.findMany({
      where: { userId },
    });

    return expense.map(PrismaExpenseMapper.toDomain);
  }

  countManyByUserId(userId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async create(expense: Expense): Promise<void> {
    const raw = PrismaExpenseMapper.toPrisma(expense);

    await this.prisma.expense.create({
      data: raw,
    });
  }

  async save(expense: Expense): Promise<void> {
    const raw = PrismaExpenseMapper.toPrisma(expense);

    await this.prisma.expense.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(expenseId: string): Promise<void> {
    await this.prisma.expense.delete({ where: { id: expenseId } });
  }
}
