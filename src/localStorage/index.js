"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWithExpiry = exports.getWithExpiry = void 0;
const getWithExpiry = (key) => {
    const stored = localStorage.getItem(key);
    if (!stored) {
        return null;
    }
    const { value, expiry } = JSON.parse(stored);
    const now = new Date();
    if (now.getTime() > expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return value;
};
exports.getWithExpiry = getWithExpiry;
const setWithExpiry = (key, value, ttl = 86400) => {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
};
exports.setWithExpiry = setWithExpiry;
