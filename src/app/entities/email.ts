export class Email {
  private readonly email: string;

  get value(): string {
    return this.email;
  }

  private validateEmailIsValid(email: string): boolean {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  constructor(email: string) {
    const isEmailValid = this.validateEmailIsValid(email);

    if (!isEmailValid) {
      throw new Error('Email invalid');
    }

    this.email = email;
  }
}
