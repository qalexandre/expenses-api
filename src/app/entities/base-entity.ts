import { randomUUID } from 'node:crypto';

export interface BaseEntityProps {
  id?: string;
  createdAt?: Date;
}

export class BaseEntity {
  private _id: string;
  private _createdAt: Date;

  constructor(props: BaseEntityProps) {
    this._id = props.id ?? randomUUID();
    this._createdAt = props.createdAt ?? new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
}
