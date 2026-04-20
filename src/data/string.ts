import { countryCodes } from '../constants';
import { characters, GenerateOptions, stringOrNumber, threeOrMore } from '../types';
import crypto from 'node:crypto'

/**
 * @description Capitalizes the first letter of a word
 * @param {string} word
 * @returns {string}
 */
export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * @description Capitalizes every word in a sentence
 * @param {string} sentence
 * @returns {string}
 */
export const capitalizeEveryWord = (sentence: string) => {
  const words = sentence.split(' ');
  let capitalized = '';
  words.forEach((word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized += capitalizedWord + ' ';
  });
  return capitalized.trim();
};

/**
 * @description Removes country code from a list of numbers
 * @param {number[]} numbers
 * @returns {number[]}
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
 * @description Adds country code to a list of numbers
 * @param {string[]} numbers
 * @returns {string[]}
 */
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




export function subtractCryptoBalances(
  ...restArgs: threeOrMore<stringOrNumber>
) {
  const subtracts = restArgs[0];
  const digits = 8;
  restArgs.shift();
  if (typeof digits !== "number") {
    throw new Error("Digits should be a valid integer");
  }

  const value = restArgs.reduce((prev, cur) => {
    return Number(prev) - Number(cur);
  }, subtracts);

  const response = Number(value).toFixed(digits);
  return response;
}

const algorithm = "aes-256-cbc";
const iv = crypto.randomBytes(16);

export type EncData = {
  iv: string;
  data: string;
};

export function encrypt(text: string, key: string): EncData {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return {
    iv: iv.toString("hex"),
    data: encrypted.toString("hex"),
  };
}

export function decrypt(enc: EncData, key: string): string {
  if (enc.data == null || enc.iv == null)
    throw new Error("Invalid enc data during decrypt");

  const iv = Buffer.from(enc.iv, "hex");
  const encryptedText = Buffer.from(enc.data, "hex");
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

export const ObjectToQueryString = (data: { [key: string]: string }) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  let queryString = "";
  for (let i = 0; i < keys.length; i++) {
    queryString += `${keys[i]}=${values[i]}${i === keys.length - 1 ? "" : "&"}`;
  }
  return queryString;
};

export const convertMobileNumber = (mobile: string, countryCode: string) => {
  if (mobile.substring(0, 1) === "0") {
    return `+${countryCode}${mobile.substring(1)}`;
  }
  if (mobile.substring(0, 3) === countryCode) {
    return `+${mobile}`;
  }
  if (mobile.substring(0, 4) === `+${countryCode}`) {
    return mobile;
  }
  return `+${countryCode}${mobile}`;
};

export const convertToInternationalMobile = (
  mobile: string,
  countryCode: string
) => {
  const length = countryCode.length;
  if (mobile.substring(0, 1) === "0") {
    return `${countryCode}${mobile.substring(1)}`;
  }
  if (mobile.substring(0, length) === countryCode) {
    return `${mobile}`;
  }
  if (mobile.substring(0, length + 1) === `+${countryCode}`) {
    return mobile.substring(1);
  }
  return `${countryCode}${mobile}`;
};


export function generateString({ length, charset }: GenerateOptions) {
  let result = "";
  const chars = charset || characters;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

