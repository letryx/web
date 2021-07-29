import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Box } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';
import { withApollo } from 'lib/with-apollo';
import { useRouter } from 'next/router';
import { FC } from 'react';

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

const ContractsPage: FC = () => {
  const { user, error: userError, isLoading } = useUser();
  const { loading, error: dataError, data } = useQuery(GET_CONTRACTS);
  const router = useRouter();

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
      <NextChakraLink href={`/api/auth/login?returnTo=${router.pathname}`}>
        Login
      </NextChakraLink>
    );
  }

  return (
    <Layout title="Letryx">
      <Box textAlign="center">{userContents}</Box>
      <Box textAlign="center">{dataContents}</Box>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default withApollo()(ContractsPage);
