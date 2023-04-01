import { Email } from './email';

describe('User email', () => {
  it('should be able to create a user email', () => {
    const email = new Email('foo.bar@gmail.com');

    expect(email).toBeTruthy();
  });

  it('should not be able to create a user email without specified characters', () => {
    expect(() => new Email('teste.com')).toThrow();
  });
});
