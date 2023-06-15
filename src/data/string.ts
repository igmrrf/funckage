import { countryCodes } from '../constants';
import { log } from '../simple';

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const removeCountryCode = (numbers: number[]) => {
  const cleaned = numbers.map((each) =>
    countryCodes.includes(each.toString().substring(0, 3))
      ? '0' + each.toString().slice(3)
      : each
  );
  return cleaned;
};

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
