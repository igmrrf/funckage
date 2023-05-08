export declare type ValueStore = string;
export declare const getWithExpiry: (key: string) => any;
export declare const setWithExpiry: (key: string, value: object | string | number, ttl?: number) => void;
