/* eslint-disable no-bitwise */
export function hashcode(str: string): number {
  let hash = 0;
  let i;
  let chr;
  for (i = 0; i < str.length; i += 1) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // convert to 32bit integer
  }
  return hash;
}

export function rand64(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
