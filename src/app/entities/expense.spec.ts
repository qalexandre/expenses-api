import { Expense } from './expense';

describe('Expense', () => {
  it('should be able to create a expense', () => {
    const expense = new Expense(
      {
        icon: 'expense',
        name: 'Banco 1',
        type: 'expense',
      },
      {},
    );
    expect(expense).toBeTruthy();
  });
  it('should be able to add a value in expense', () => {
    const expense = new Expense(
      {
        icon: 'expense',
        name: 'Banco 1',
        type: 'expense',
      },
      {},
    );

    expense.addValue(5);
    expect(expense.value).toEqual(5);
  });
});
