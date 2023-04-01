import { CreateUser } from '@app/use-cases/user/create-user';
import { GetUser } from '@app/use-cases/user/get-user';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/user/create-user-body';

@Controller('users')
export class UsersControllers {
  constructor(private createUser: CreateUser, private getUser: GetUser) {}

  @Get(':id')
  async getById(@Param('id') id: string) {
    const { user } = await this.getUser.execute({ userId: id });

    return { user };
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { user } = await this.createUser.execute(body);

    return { user };
  }
}
