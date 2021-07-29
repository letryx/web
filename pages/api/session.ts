/* eslint-disable no-console */
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
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
