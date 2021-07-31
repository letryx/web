// lib/withApollo.js
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from 'next-with-apollo';
import { createApolloClient } from './apollo-client';

export default withApollo(
  ({ initialState }) => createApolloClient(initialState || {}),
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
