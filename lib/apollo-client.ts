import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import fetch from 'isomorphic-unfetch';
import { SubscriptionClient } from 'subscriptions-transport-ws';

let accessToken: string | null = null;

// this is replaced by the client url via next.config.js
if (!process.env.GRAPHQL_API_SSR_URL || !process.env.GRAPHQL_API_URL) {
  throw new Error('GRAPHQL_API_SSR_URL must be set!');
}

const ssrMode = typeof window === 'undefined';

const HTTP_URL = ssrMode
  ? process.env.GRAPHQL_API_SSR_URL
  : process.env.GRAPHQL_API_URL;

const WS_URL = HTTP_URL.replace(/^http/i, 'ws');

const requestAccessToken = async () => {
  if (accessToken) return;

  const res = await fetch('/api/session');
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
  } else {
    accessToken = null;
  }
};

// remove cached token on 401 from the server
export const resetTokenLink = onError(({ networkError }) => {
  if (
    networkError &&
    networkError.name === 'ServerError' &&
    'statusCode' in networkError &&
    networkError.statusCode === 401
  ) {
    accessToken = null;
  }
});

const httpLink = new HttpLink({
  uri: HTTP_URL,
  credentials: 'include',
  fetch,
});

let link = from([
  new RetryLink(),
  setContext(async () => {
    await requestAccessToken();
    return {
      headers: accessToken
        ? {
            Authorization: `Bearer ${accessToken}`,
          }
        : {},
    };
  }),
]);

if (!ssrMode) {
  link = link.split(
    ({ query }) => {
      const def = getMainDefinition(query);
      return (
        def.kind === 'OperationDefinition' &&
        def.operation === 'subscription' &&
        typeof window !== 'undefined'
      );
    },
    new WebSocketLink(
      new SubscriptionClient(WS_URL, {
        lazy: true,
        reconnect: true,
        // connectionParams: async () => {
        //   await requestAccessToken();
        //   return {
        //     headers: {
        //       authorization: accessToken ? `Bearer ${accessToken}` : '',
        //     },
        //   };
        // },
      })
    ),
    httpLink
  );
}

export function createApolloClient(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient<NormalizedCacheObject>({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
