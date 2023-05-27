/**
 *
 * @param {Number} milliseconds
 * @returns
 */
export function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * @description Console Log
 * @param {*} data
 * @returns
 */
export const log = (data: object | string | number | any) =>
  console.log('%c Funckage:', 'background: #ff0022; color: #bada55\n', data);

/**
 *
 * @param {object} data
 * @param {string} name
 * @param {string} type
 * @returns
 */
export const validateType = (
  data: object | any,
  name: string | number,
  type: string
) => {
  const isNamePresent = name in data;
  if (!isNamePresent) {
    return { message: `${name} is required`, valid: false };
  }
  const value = data[name];
  if (typeof value !== type) {
    return { message: `${name} must be a number`, valid: false };
  }
  return { message: 'success', valid: true };
};

export const fizz_buzz = (numbers: number[]) => {
  let result: (string | number)[] = [];
  for (const num of numbers) {
    if (num % 15 === 0) {
      result.push('fizzbuzz');
    } else if (num % 3 === 0) {
      result.push('fizz');
    } else if (num % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(num);
    }
  }
  return result.join(', ');
};

export const addComma = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
