/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { request } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

interface ISubscribeEvent {
  type: 'subscribe' | 'unsubscribe';
  data: {
    ip_signup?: string;
    ip_opt?: string;
    merges: {
      EMAIL: string;
      LNAME: string;
      FNAME: string;
      COMPANY: string;
    };
  };
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') throw new Error('only accepts POST');

  const { IP_STACK_KEY, DISCORD_SIGNUPS_HOOK } = process.env;
  const hookData: ISubscribeEvent = req.body;
  const { type, data } = hookData;
  const { merges, ip_signup, ip_opt } = data;
  const { EMAIL, FNAME, LNAME, COMPANY } = merges;

  console.log(EMAIL, FNAME, LNAME, COMPANY);

  let geoStr;

  // geo data
  const ip = ip_signup || ip_opt;
  if (!IP_STACK_KEY) throw new Error('set IP_STACK_KEY');
  if (ip && IP_STACK_KEY) {
    const geoUrl = `http://api.ipstack.com/${ip}?access_key=${IP_STACK_KEY}`;
    const geoData = await (await fetch(geoUrl)).json();
    const { country_code, country_name, region_code, city } = geoData;
    geoStr = `from ${city}, ${
      country_code === 'US' ? region_code : country_name
    }`;
  }

  const message = `${type}d: [${COMPANY}] ${FNAME} ${LNAME} <${EMAIL}> ${geoStr}`;
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
      `Discord hook ${discordRes.status}: ${await discordRes.json()}`
    );
  }

  res.status(200).end();
};
