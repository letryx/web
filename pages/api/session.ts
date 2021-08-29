/* eslint-disable no-console */
import { AccessTokenError } from '@auth0/nextjs-auth0/src/utils/errors';
import { auth0 } from 'lib/auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { accessToken } = await auth0.getAccessToken(req, res);
    res.status(200).json({ accessToken });
  } catch (error) {
    const { message, code } = error as AccessTokenError;
    console.error(message, code);
    res.status(500).json(
      process.env.NODE_ENV === 'development'
        ? {
            error: message,
            code,
          }
        : {}
    );
  }
}
