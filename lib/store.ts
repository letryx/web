/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function get<T>(key: string): T | undefined {
  if (typeof window !== 'undefined') {
    const data = window.localStorage.getItem(key);
    if (data) {
      const val: T = JSON.parse(data);
      return val;
    }
  }
  return undefined;
}

export function set<T>(key: string, value: T): T | undefined {
  let old: T | undefined;
  if (typeof window !== 'undefined') {
    old = get(key);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return old;
}

export function remove(key: string): void {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
}
