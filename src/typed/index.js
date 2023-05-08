"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeFunctions = exports.decorator = void 0;
const decorator = (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const [arg] = args;
        const argLowered = arg.toLowerCase();
        originalMethod.apply(this, [argLowered]);
    };
};
exports.decorator = decorator;
const compose = (...functions) => (str) => {
    functions.reduceRight((int, func) => {
        int = func(int);
    }, str);
};
exports.composeFunctions = compose();
