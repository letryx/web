// lib/withApollo.js
import { ApolloProvider } from '@apollo/react-hooks';
import { createApolloClient } from 'lib/apollo-client';
import withApollo from 'next-with-apollo';

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
