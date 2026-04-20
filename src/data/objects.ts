/**
 * Memoize function
 * @param fn
 * @returns
 */
export function memoize<T extends (...params: any[]) => any>(fn: T) {
  const cache = new Map();

  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

/**
 * Omit keys from object
 * @param data
 * @param keys
 * @returns
 */
export function omit(data: any, keys: string[]) {
  if (Array.isArray(keys) && data && Object.keys(data)?.length)
    for (const key of keys) {
      if (key in data) {
        data[key] = undefined;
      }
    }
  return data;
}
