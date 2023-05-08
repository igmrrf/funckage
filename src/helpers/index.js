"use strict";
/**
 * @description Redux Logger
 * @param {*} store
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.redux_logger = void 0;
const redux_logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('%c prev state', 'background: #222; color: #bada55', store.getState());
    console.info('%c dispatching', 'background: #222; color: #ba55da', action);
    let result = next(action);
    console.log('%c next state', 'background: #222; color: #55bada', store.getState());
    console.groupEnd();
    return result;
};
exports.redux_logger = redux_logger;
