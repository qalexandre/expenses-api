import { Email } from '@app/entities/email';
import { User } from '@app/entities/user';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email.value,
      password: user.password,
      createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        email: new Email(raw.email),
        name: raw.name,
        password: raw.password,
      },
      { id: raw.id, createdAt: raw.createdAt },
    );
  }
}
