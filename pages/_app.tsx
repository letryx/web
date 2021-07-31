import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import { createApolloClient } from 'lib/apollo-client';
import { AppProvider } from 'lib/app-provider';
import { UIProvider } from 'lib/ui-provider';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps & WithApolloProps<NormalizedCacheObject>> = ({
  Component,
  pageProps,
  apollo,
}) => (
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
  createApolloClient(initialState || {})
)(App);
