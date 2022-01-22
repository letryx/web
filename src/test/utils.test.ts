import { fakerFromSeed, hashcode } from '../lib/random';

test('random.hashcode', () => {
  expect(hashcode('')).toEqual(0);
  expect(hashcode('abracadabra')).toEqual(1909340870);
});

test('random.createFaker', () => {
  expect(fakerFromSeed(1).name.lastName()).toEqual('Johnson');
  expect(fakerFromSeed('from string').name.lastName()).toEqual('Stiedemann');
});