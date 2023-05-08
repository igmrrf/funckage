"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComma = exports.fizz_buzz = exports.validateType = exports.log = exports.sleep = void 0;
/**
 *
 * @param {Number} milliseconds
 * @returns
 */
function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
exports.sleep = sleep;
/**
 * @description Console Log
 * @param {*} data
 * @returns
 */
const log = (data) => console.log('%c Funckage:', 'background: #ff0022; color: #bada55\n', data);
exports.log = log;
/**
 *
 * @param {object} data
 * @param {string} name
 * @param {string} type
 * @returns
 */
const validateType = (data, name, type) => {
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
exports.validateType = validateType;
const fizz_buzz = (numbers) => {
    let result = [];
    for (const num of numbers) {
        if (num % 15 === 0) {
            result.push('fizzbuzz');
        }
        else if (num % 3 === 0) {
            result.push('fizz');
        }
        else if (num % 5 === 0) {
            result.push('buzz');
        }
        else {
            result.push(num);
        }
    }
    return result.join(', ');
};
exports.fizz_buzz = fizz_buzz;
const addComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.addComma = addComma;
