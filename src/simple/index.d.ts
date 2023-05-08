/**
 *
 * @param {Number} milliseconds
 * @returns
 */
export declare function sleep(milliseconds: number): Promise<unknown>;
/**
 * @description Console Log
 * @param {*} data
 * @returns
 */
export declare const log: (data: object | string | number | any) => void;
/**
 *
 * @param {object} data
 * @param {string} name
 * @param {string} type
 * @returns
 */
export declare const validateType: (data: object | any, name: string | number, type: string) => {
    message: string;
    valid: boolean;
};
export declare const fizz_buzz: (numbers: number[]) => string;
export declare const addComma: (num: number) => string;
