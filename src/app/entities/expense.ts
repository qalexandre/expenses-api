import { BaseEntity, BaseEntityProps } from './base-entity';

export interface ExpenseProps {
  name: string;
  icon: string;
  type: ExpenseType;
  userId: string;
  value?: number;
}

export type ExpenseType = 'expense' | 'income';

export class Expense extends BaseEntity {
  private props: ExpenseProps;

  constructor(props: ExpenseProps, { id, createdAt }: BaseEntityProps) {
    super({ createdAt, id });
    this.props = props;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set icon(icon: string) {
    this.props.icon = icon;
  }

  public get icon(): string {
    return this.props.icon;
  }

  public set type(type: ExpenseType) {
    this.props.type = type;
  }

  public get type(): ExpenseType {
    return this.props.type;
  }
  public set userId(userId: string) {
    this.props.userId = userId;
  }

  public get userId(): string {
    return this.props.userId;
  }
  public get value(): number | null | undefined {
    return this.props.value;
  }

  public addValue(value: number): void {
    if (!this.props.value) {
      this.props.value = 0;
    }
    this.props.value += value;
  }
}
