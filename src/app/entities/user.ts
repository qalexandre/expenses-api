import { BaseEntity, BaseEntityProps } from './base-entity';
import { Email } from './email';

export interface UserProps {
  name: string;
  email: Email;
  password: string;
}

export class User extends BaseEntity {
  private props: UserProps;

  constructor(props: UserProps, { id, createdAt }: BaseEntityProps) {
    super({ createdAt, id });
    this.props = props;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: Email) {
    this.props.email = email;
  }

  public get email(): Email {
    return this.props.email;
  }
  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }
}
