import { hashcode } from '../utils/random';

test('random.hashcode', async () => {
  expect(hashcode('')).toEqual(0);
  expect(hashcode('abracadabra')).toEqual(1909340870);
});
