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

const requestAccessToken = async () => {
  if (accessToken) return;

  const res = await fetch('/api/session');
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
  } else {
    accessToken = 'public';
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
  uri: 'http://localhost:6060/v1/graphql',
  credentials: 'include',
  fetch,
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(
    process.env.HASURA_WS_ENDPOINT || '',
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
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
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
