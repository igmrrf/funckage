
export type stringOrNumber = string | number;

export type threeOrMore<T> = [T, T, ...T[]];
export type twoOrMore<T> = [T, ...T[]];

export const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export enum Charset {
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
}
export type GenerateOptions = {
  length: number;
  charset?: string;
  prefix?: string;
  postfix?: string;
  upperCaseAlphabets?: boolean;
  specialChars?: boolean;
  digits?: boolean;
  count?: number;
};

