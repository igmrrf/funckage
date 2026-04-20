/**
 * @description Redux Logger
 * @param {*} store
 * @returns
 */

export type Action = { type: string; payload: object };

export const redux_logger = (store: object | any) => (next: (action: Action) => void) => (action: Action) => {
    console.group(action.type);
    console.log("%c prev state", "background: #222; color: #bada55", store.getState());
    console.info("%c dispatching", "background: #222; color: #ba55da", action);
    let result = next(action);
    console.log("%c next state", "background: #222; color: #55bada", store.getState());
    console.groupEnd();
    return result;
};

/**
 *
 * @param {Number} milliseconds
 * @returns
 */
export function sleep(milliseconds: number) {
    return new Promise((resolve: any) => setTimeout(resolve, milliseconds));
}

/**
 * @description Console Log
 * @param {*} data
 * @returns
 */
export const log = (data: any) => console.log("%c Funckage:", "background: #ff0022; color: #bada55\n", data);

export const fizz_buzz = (numbers: number[]) => {
    let result: (string | number)[] = [];
    for (const num of numbers) {
        if (num % 15 === 0) {
            result.push("fizzbuzz");
        } else if (num % 3 === 0) {
            result.push("fizz");
        } else if (num % 5 === 0) {
            result.push("buzz");
        } else {
            result.push(num);
        }
    }
    return result.join(", ");
};

export const to = (promise: Promise<any>) =>
    promise.then((data: any) => [null, data]).catch((err: any) => [err]);

export const getEnv = (key: string, fallback?: string): string => {
    const value = process.env[key];

    if (value || fallback) {
        return (value || fallback) as string;
    }
    throw new Error(`Missing environment variable: ${key}`);
};
