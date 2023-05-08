import { log } from '../simple';

export const compound = (
  amount: number,
  percentage: number,
  period: number
) => {
  let total = amount;
  let current = 1;

  while (period) {
    const interest = (amount * percentage) / 100;
    total += interest;
    amount = total;
    current++;
    period--;
  }
  log(`Compound Interest Result: ${total.toFixed(2)}`);
};
