/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { sanitizeHtml } from 'lib/sanitize';
import { NextApiRequest, NextApiResponse } from 'next';

interface SanitizedHtmlResponse {
  html: string;
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<SanitizedHtmlResponse>
): void => {
  if (req.method === 'GET') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') throw new Error('only accepts POST');

  const hookData = req.body as Record<string, string>;
  const { html } = hookData;
  const sanitized = sanitizeHtml(html);
  res.status(200).json({ html: sanitized });
};
