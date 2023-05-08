export type ValueStore = string;

export const getWithExpiry = (key: string) => {
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

export const setWithExpiry = (
  key: string,
  value: object | string | number,
  ttl: number = 86400
) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
