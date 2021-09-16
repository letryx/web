import { initAuth0 } from '@auth0/nextjs-auth0';
import decode, { JwtPayload } from 'jwt-decode';

export const auth0 = initAuth0();

export const jwtDecode = (jwt: string): JwtPayload => decode<JwtPayload>(jwt);

export const isExpired = (jwt: string): boolean =>
  (jwtDecode(jwt).exp || 0) * 1000 < Date.now();
