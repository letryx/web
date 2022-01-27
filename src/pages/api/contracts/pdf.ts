import { getAccessToken } from '@auth0/nextjs-auth0';
import { stringToDOM } from 'components/contract-show/frame';
import { createApiApolloClient } from 'lib/apollo-client';
import {
  GetSecContractDocument,
  GetSecContractQuery,
} from 'lib/generated/graphql/apollo-schema';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { pdfCss, pdfMonoFontUrl } from 'styles/pdf';

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
  const contractQueryResult = await client.query<GetSecContractQuery>({
    query: GetSecContractDocument,
    variables: { uid },
  });

  if (!contractQueryResult.data.sec_filing_attachment_by_pk) {
    res.status(404);
    res.end();
    return;
  }

  const contract = contractQueryResult.data.sec_filing_attachment_by_pk;

  const { contents, description, attachment_type, sec_filing } = contract;
  const exportFilename = [
    sec_filing.sec_company.name,
    description || attachment_type,
  ]
    .join('--')
    .replaceAll(/(\s)+/g, '-')
    .replaceAll(/[^\w-]/g, '')
    .substring(0, 80);

  // add lambda-compatible defaults for plain-text contracts
  const domString = ReactDOMServer.renderToString(
    React.createElement('div', {}, [
      React.createElement('link', {
        type: 'text/css',
        href: pdfMonoFontUrl,
      }),
      React.createElement('style', {
        type: 'text/css',
        dangerouslySetInnerHTML: {
          __html: pdfCss,
        },
      }),
      ...stringToDOM(contents),
    ])
  );

  const pdfRes = await fetch(process.env.EXPORT_PDF_LAMBDA_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/pdf',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ html: domString }),
  });

  const { body: pdfBody } = pdfRes;
  if (!pdfRes.ok) throw new Error(`unexpected response ${pdfRes.statusText}`);
  if (!pdfBody) throw new Error('empty response body');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename=${exportFilename}.pdf`
  );
  res.status(200);

  await new Promise<void>((resolve, reject) => {
    pdfBody
      .pipe(res)
      .on('finish', () => resolve())
      .on('error', (err) => reject(err));
  });
};
