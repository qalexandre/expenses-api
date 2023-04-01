import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from '@app/repositories/user-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { ExpensesRepository } from '@app/repositories/expense-repository';
import { PrismaExpensesRepository } from './prisma/repositories/prisma-expenses-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: ExpensesRepository,
      useClass: PrismaExpensesRepository,
    },
  ],
  exports: [UsersRepository, ExpensesRepository],
})
export class DatabaseModule {}
