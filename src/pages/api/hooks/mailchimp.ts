/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') throw new Error('only accepts POST');

  const { IP_STACK_KEY, DISCORD_SIGNUPS_HOOK } = process.env;
  const hookData = req.body as Record<string, string>;
  const { type } = hookData;

  console.log(hookData);

  const ip = hookData['data[ip_signup]'] || hookData['data[ip_opt]'];
  const email = hookData['data[merges][EMAIL]'];
  const fname = hookData['data[merges][FNAME]'];
  const lname = hookData['data[merges][LNAME]'];
  const company = hookData['data[merges][COMPANY]'];

  // geo data
  let geoStr = '';
  if (!IP_STACK_KEY) throw new Error('set IP_STACK_KEY');
  if (ip && IP_STACK_KEY) {
    const geoUrl = `http://api.ipstack.com/${ip}?access_key=${IP_STACK_KEY}`;
    const geoData = (await (await fetch(geoUrl)).json()) as Record<
      string,
      string
    >;
    const { country_code, country_name, region_code, city } = geoData;
    geoStr = `from ${city}, ${
      country_code === 'US' ? region_code : country_name
    }`;
  }

  const message = `${type}d: [${company}] ${fname} ${lname} <${email}> ${geoStr}`;
  console.log(message);

  if (!DISCORD_SIGNUPS_HOOK) throw new Error('set DISCORD_SIGNUPS_HOOK');
  const discordRes = await fetch(`${DISCORD_SIGNUPS_HOOK}?wait=true`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Mailchimp',
      content: message,
    }),
  });

  if (discordRes.status !== 200) {
    throw new Error(
      `Discord hook ${discordRes.status}: ${JSON.stringify(
        await discordRes.json()
      )}`
    );
  }

  res.status(200).end();
};
