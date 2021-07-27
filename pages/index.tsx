import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { useUser } from '@auth0/nextjs-auth0';
import { Box } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';
import { SubscribeForm } from 'components/subscribe-form';
import { FC } from 'react';
import { withApollo } from '../lib/with-apollo';

const GET_CONTRACTS = gql`
  query GetContracts {
    data_sec_contracts(
      order_by: { accession_number: asc, sequence: asc }
      limit: 3
    ) {
      company_name
      accession_number
      sequence
      description
      filing_type
    }
  }
`;

// Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjdPSUszMWNoTWg0eTFtUnpvM0NJdCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiZ29vZ2xlLWFwcHN8Y2xpZnRvbkBsZXRyeXguY29tIn0sImlzcyI6Imh0dHBzOi8vbGV0cnl4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtYXBwc3xjbGlmdG9uQGxldHJ5eC5jb20iLCJhdWQiOlsiaHR0cHM6Ly9hcGkubGV0cnl4LmNvbSIsImh0dHBzOi8vbGV0cnl4LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MjczNjYyNTQsImV4cCI6MTYyNzQ1MjY1NCwiYXpwIjoiRlU4UmxLWXhhOEpWb0I4STdoR1JMdzZoajJaZ21EdG4iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.BptKzm0zypVuhJbUKiAQvgAgNB_TiEi6zun79FDz_TQpM3b4JWzfLWW5KNG21ERq7Wp37kX3LP4U2OZSeQT7Zo3V1u_Zwx6qbUudE0u9EU6GkXSUx2lM0ZGL8AdQhUS3HjQYZqs1_wIeMUYnC_u22aH3_gIM1qpRT138Ts5UlZgKYLFDoEIqEiBVK2j7JW3IV0FN8_gTeNYuUPZkbzy6ix4P-SLso2WbgW20JNHyItLkrale4ZsN3SzKaNbZSZ1VP8bcEtn9O-vryn0B1Cp9W0F9ckY0GqqJVkzJWGF7PlAdlNL9ct70HaigfCKmdzpkUsLMM1GccdO6AVuVY-DgYg

const IndexPage: FC = () => {
  const { user, error: userError, isLoading } = useUser();
  const { loading, error: dataError, data } = useQuery(GET_CONTRACTS);
  let userContents = <div />;
  let dataContents = <div />;

  if (loading) {
    dataContents = <div>Loading data...</div>;
  } else if (dataError) {
    dataContents = <div>{dataError.message}</div>;
  } else {
    dataContents = <div>{JSON.stringify(data.data_sec_contracts)}</div>;
  }

  if (isLoading) {
    userContents = <div>Loading...</div>;
  } else if (userError) {
    userContents = <div>{userError.message}</div>;
  } else if (user) {
    userContents = (
      <div>
        Welcome {user.name}!{' '}
        <NextChakraLink href="/api/auth/logout">Logout</NextChakraLink>
      </div>
    );
  } else {
    userContents = (
      <NextChakraLink href="/api/auth/login">Login</NextChakraLink>
    );
  }

  return (
    <Layout title="Letryx" hideNav>
      <Box textAlign="center" fontSize="xl" pt={8}>
        <SubscribeForm />
      </Box>
      <Box textAlign="center">{userContents}</Box>
      <Box textAlign="center">{dataContents}</Box>
    </Layout>
  );
};

export default withApollo()(IndexPage);
