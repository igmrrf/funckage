/**
 * @description Redux Logger
 * @param {*} store
 * @returns
 */
export declare type Action = {
    type: string;
    payload: object;
};
export declare const redux_logger: (store: object | any) => (next: (action: Action) => void) => (action: Action) => void;
