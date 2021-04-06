/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/user';
import { AuthResponse } from 'types/api';
import { rand57, fakerFromSeed } from 'utils/random';

export default (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
): void => {
  // workaround for IncomingHttpHeaders: string[] | string | undefined
  const token = [...(req.headers['x-letryx-auth'] || rand57(32))].join('');
  const faker = fakerFromSeed(token);
  const fname = faker.name.firstName();
  const lname = faker.name.lastName();
  const user: User = {
    id: 1,
    name: [fname, lname].join(' '),
    email: `${fname.toLowerCase()}@fake.com`,
  };
  console.log(`${user.name} logged in: ${token}`);
  res.status(200).json({ currentUser: user, token });
};
