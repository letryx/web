/* eslint-disable no-console */
import { getAccessToken } from '@auth0/nextjs-auth0';
import { createApiApolloClient } from 'lib/apollo-client';
import {
  GetSecContractDocument,
  GetSecContractQuery,
} from 'lib/generated/graphql/apollo-schema';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Uint8Array>
): Promise<void> => {
  if (req.method !== 'GET') throw new Error('only accepts GET');
  const slug =
    typeof req.query.slug === 'object'
      ? req.query.slug[0]
      : req.query.slug || '';
  const uid = slug.split(/-|\./)[0];

  const { accessToken } = await getAccessToken(req, res);
  if (!accessToken) {
    res.status(401);
    res.end();
    return;
  }
  const client = createApiApolloClient(accessToken);
  const contract = await client.query<GetSecContractQuery>({
    query: GetSecContractDocument,
    variables: { uid },
  });
  const contents = contract.data.sec_filing_attachment_by_pk?.contents;

  if (!contents) {
    res.status(404);
    res.end();
    return;
  }

  const pdfRes = await fetch(
    'https://sxb1zpn5b9.execute-api.us-east-1.amazonaws.com/default/pdf-generator',
    {
      method: 'POST',
      headers: {
        Accept: 'application/pdf',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ html: contents }),
    }
  );

  const { body: pdfBody } = pdfRes;
  if (!pdfRes.ok) throw new Error(`unexpected response ${pdfRes.statusText}`);
  if (!pdfBody) throw new Error('empty response body');

  res.status(200);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=export.pdf');

  await new Promise<void>((resolve, reject) => {
    pdfBody
      .on('error', (reason: string) => reject(reason))
      .on('data', (chunk: Uint8Array) => res.send(chunk))
      .on('end', () => {
        resolve();
      });
  });

  res.end();
};
