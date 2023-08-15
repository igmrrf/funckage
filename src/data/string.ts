import { countryCodes } from '../constants';

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const capitalizeEveryWord = (sentence: string) => {
  const words = sentence.split(' ');
  let capitalized = '';
  words.forEach((word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized += capitalizedWord + ' ';
  });
  return capitalized.trim();
};

export const removeCountryCode = (numbers: number[]) => {
  const cleaned = numbers.map((each) =>
    countryCodes.includes(each.toString().substring(0, 3))
      ? '0' + each.toString().slice(3)
      : each
  );
  return cleaned;
};

export const addCountryCode = (numbers: string[]) => {
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
