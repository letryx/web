import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProvider } from 'components/app-provider';
import { UIProvider } from 'components/ui-provider';
import { createApolloClient } from 'lib/apollo-client';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps & WithApolloProps<NormalizedCacheObject>> = ({
  Component,
  pageProps,
  apollo,
}) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <ApolloProvider client={apollo}>
    <UIProvider>
      <UserProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </UserProvider>
    </UIProvider>
  </ApolloProvider>
);

// https://github.com/lfades/next-with-apollo#using-_app
export default withApollo(({ initialState }) =>
  createApolloClient(initialState as NormalizedCacheObject)
)(App);
