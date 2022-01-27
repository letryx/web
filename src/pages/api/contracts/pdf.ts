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
  res: NextApiResponse
): Promise<void> => {
  if (!process.env.EXPORT_PDF_LAMBDA_URL) {
    throw new Error('process.env.EXPORT_PDF_LAMBDA_URL must be set!');
  }

  const { method, query } = req;
  if (method !== 'GET') throw new Error('only accepts GET');

  const uid = typeof query.uid === 'object' ? query.uid[0] : query.uid;
  if (!uid) {
    res.status(400);
    res.end();
    return;
  }

  const accessToken =
    typeof query.accessToken === 'object'
      ? query.accessToken[0]
      : query.accessToken || (await getAccessToken(req, res)).accessToken;
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

  const pdfRes = await fetch(process.env.EXPORT_PDF_LAMBDA_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/pdf',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ html: contents }),
  });

  const { body: pdfBody } = pdfRes;
  if (!pdfRes.ok) throw new Error(`unexpected response ${pdfRes.statusText}`);
  if (!pdfBody) throw new Error('empty response body');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=export.pdf');
  res.status(200);

  await new Promise<void>((resolve, reject) => {
    pdfBody
      .pipe(res)
      .on('finish', () => resolve())
      .on('error', (err) => reject(err));
  });
};
