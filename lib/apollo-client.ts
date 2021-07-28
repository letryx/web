import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/link-context';
import fetch from 'isomorphic-unfetch';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import ws from 'ws';

let accessToken: string | null = null;

if (!process.env.GRAPHQL_API_URL || !process.env.GRAPHQL_API_SSR_URL) {
  throw new Error('GRAPHQL_API_URL and GRAPHQL_API_SSR_URL must be set!');
}

const gqlHttpUri =
  typeof window === 'undefined'
    ? process.env.GRAPHQL_API_SSR_URL
    : process.env.GRAPHQL_API_URL;

const gqlWsUri = gqlHttpUri.replace(/^http/i, 'ws');

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
  uri: gqlHttpUri,
  credentials: 'include',
  fetch,
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(
    gqlWsUri,
    {
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
    },
    ws
  )
);

const link = from([
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
]).split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return (
      def.kind === 'OperationDefinition' &&
      def.operation === 'subscription' &&
      typeof window !== 'undefined'
    );
  },
  wsLink,
  httpLink
);

export function createApolloClient(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const ssrMode = typeof window === 'undefined';
  return new ApolloClient<NormalizedCacheObject>({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
