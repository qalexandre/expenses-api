import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/user-repository';
import { Injectable } from '@nestjs/common';

interface GetUserRequest {
  userId: string;
}

interface GetUserResponse {
  user: User | null;
}

@Injectable()
export class GetUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: GetUserRequest): Promise<GetUserResponse> {
    const { userId } = request;

    const user = await this.usersRepository.findById(userId);

    return { user };
  }
}
