/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fakerStatic from 'faker';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore (currently no .d.ts available yet)
import Faker from 'faker/lib';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore (currently no .d.ts available yet)
import faker_en from 'faker/lib/locales/en';

/**
 * returns a seeded faker instance
 *   see: https://github.com/Marak/faker.js/issues/318#issuecomment-736330206
 * @param seed can be a number or a string
 * @returns seeded faker instance
 */
export function fakerFromSeed(seed: number | string): typeof fakerStatic {
  const faker = new Faker({ locale: 'en' });
  faker.seed(typeof seed === 'string' ? hashcode(seed) : seed);
  faker.locales.en = faker_en;
  return faker as typeof fakerStatic;
}

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

/**
 * base62 without ambiguous characters
 * @param length
 * @returns random base57 string
 */
export function rand57(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
