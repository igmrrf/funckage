import { log } from '../helpers';
import { stringOrNumber, twoOrMore } from '../types';

/**
 * @param numbers
 * @returns number
 *
 * example: 
 * subtract(1,2,3,4,5)
 */
export function subtract(...numbers: twoOrMore<stringOrNumber>) {
  numbers.pop();
  return numbers.reduce(
    (prev, cur) => Number(prev) - Number(cur),
    0
  );
}

/**
 * @param numbers
 * @returns number
 *
 * example:
 * add(1,2,3,4,5)
 */
export function add(...numbers: twoOrMore<stringOrNumber>) {
  return numbers.reduce(
    (prev, cur) => Number(prev) + Number(cur),
    0
  );

}

/**
 * @param amount
 * @param percentage
 * @param period
 * @returns number
 *
 * example:
 * compound(1000, 10, 10)
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

/**
 * @param num
 * @returns string
 *
 * example:
 * addComma(1000000)
 * returns 1,000,000
 */
export const addComma = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * @param value
 * @returns string
 *
 * example:
 * convertToString(1)
 * returns One
 */
export const convertToString = (value: number) => {
  if (typeof value !== 'number') {
    throw new Error("Parameter isn't a valid number");
  }
  if (value > 100) {
    throw new Error('Parameter exceeds limt');
  }
  let stringValue;
  switch (value) {
    case 1:
      stringValue = 'One';
      break;
    case 2:
      stringValue = 'Two';
      break;
    case 3:
      stringValue = 'Three';
      break;
    case 4:
      stringValue = 'Four';
      break;
    case 5:
      stringValue = 'Five';
      break;
    case 6:
      stringValue = 'Six';
      break;
    case 7:
      stringValue = 'Seven';
      break;
    case 8:
      stringValue = 'Eight';
      break;
    case 9:
      stringValue = 'Nine';
    default:
      break;
  }

  if (value === 0) {
    stringValue = 'Zero';
  }

  return stringValue;
};

