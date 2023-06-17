import { log } from '../simple';

/**
 * @description Find the compound Intrest 
 * @param {*} amount
 * @param {*} percentage
 * @param {*} period
 * @returns
 */

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
