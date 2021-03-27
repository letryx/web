/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'types/user';
import { AuthResponse } from 'types/api';
import { rand64, hashcode } from 'utils/random';
import faker from 'faker';

export default (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
): void => {
  // workaround for IncomingHttpHeaders: string[] | string | undefined
  const token = [...(req.headers['x-letryx-auth'] || rand64(32))].join('');
  faker.seed(hashcode(token));
  const fname = faker.name.firstName();
  const lname = faker.name.lastName();
  const user: User = {
    id: 1,
    name: [fname, lname].join(' '),
    email: `${fname.toLowerCase()}@fake.com`,
  };
  console.log(`${user.name} logged in (${token} | ${hashcode(token)})`);
  res.status(200).json({ currentUser: user, token });
};
