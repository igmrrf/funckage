import { countryCodes } from '../constants';
import { log } from '../simple';

/**
 * @description Capitalise the first letter of a sentence
 * @param {*} word
 * @returns Capitalized String 
 */

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * @description Remove country code from a list of phone numbers
 * @param {*} numbers
 * @returns Removes country code 
 */

export const removeCountryCode = (numbers: number[]) => {
  const cleaned = numbers.map((each) =>
    countryCodes.includes(each.toString().substring(0, 3))
      ? '0' + each.toString().slice(3)
      : each
  );
  return cleaned;
};

/**
 * @description Add country code from a list of phone numbers
 * @param {*} numbers
 * @returns Adds country code 
 */

export const addCountryCode = (numbers: number[]) => {
  const cleaned = numbers.map((each) =>
    each.toString().substring(0, 3) === '234' ||
      each.toString().charAt(0) === '233'
      ? each.toString()
      : each.toString().charAt(0) === '0'
        ? '234' + each.toString().slice(1)
        : '234' + each.toString()
  );
  return cleaned;
};
