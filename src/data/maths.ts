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
console.log({ hello: 'hello' });
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

console.log(convertToString(9));
