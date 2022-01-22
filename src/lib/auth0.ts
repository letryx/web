import { initAuth0 } from '@auth0/nextjs-auth0';
import decode, { JwtPayload } from 'jwt-decode';

export const auth0 = initAuth0();

export const jwtDecode = (jwt: string): JwtPayload => decode<JwtPayload>(jwt);

const PADDING_SECONDS = 600;
export const isExpired = (jwt: string): boolean => {
  const expiration = (jwtDecode(jwt).exp || 0) * 1000;
  return expiration < Date.now() + PADDING_SECONDS * 1000;
};
