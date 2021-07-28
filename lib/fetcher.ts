import { get } from 'lib/store';

interface APIResponse<T> {
  data: T;
  res: Response;
}

function withAuth(opts: RequestInit = {}): RequestInit {
  const { headers, ...rest } = opts;

  const token = get<string>('api-token');
  const authHeader: Record<string, string> = token
    ? { 'x-letryx-auth': token }
    : {};

  return { headers: { ...headers, ...authHeader }, ...rest };
}

export async function fetcher<T>(
  url: RequestInfo,
  opts: RequestInit = {}
): Promise<APIResponse<T>> {
  const res = await fetch(url, withAuth(opts));
  const data: T = await res.json();
  return { res, data };
}

export async function post<T>(
  url: RequestInfo,
  opts: RequestInit = {}
): Promise<APIResponse<T>> {
  return fetcher(url, { ...opts, method: 'POST' });
}
