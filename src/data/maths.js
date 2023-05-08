"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compound = void 0;
const simple_1 = require("../simple");
const compound = (amount, percentage, period) => {
    let total = amount;
    let current = 1;
    while (period) {
        const interest = (amount * percentage) / 100;
        total += interest;
        amount = total;
        current++;
        period--;
    }
    (0, simple_1.log)(`Compound Interest Result: ${total.toFixed(2)}`);
};
exports.compound = compound;
