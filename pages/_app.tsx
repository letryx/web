// import {
//   ApolloClient,
//   ApolloProvider,
//   HttpLink,
//   InMemoryCache,
// } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProvider } from 'lib/app-provider';
import { UIProvider } from 'lib/ui-provider';
import { AppProps } from 'next/app';
import { FC } from 'react';

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: `https://${process.env.NEXT_PUBLIC_API_HOST}`,
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   }),
//   cache: new InMemoryCache(),
// });

const App: FC<AppProps> = ({ Component, pageProps }) => (
  // <ApolloProvider client={client}>
  <UIProvider>
    <UserProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </UserProvider>
  </UIProvider>
  // </ApolloProvider>
);

export default App;
