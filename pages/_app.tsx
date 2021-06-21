// import {
//   ApolloClient,
//   ApolloProvider,
//   HttpLink,
//   InMemoryCache,
// } from '@apollo/client';
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
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </UIProvider>
  // </ApolloProvider>
);

export default App;
