import { useUser } from '@auth0/nextjs-auth0';
import { Box } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';
import { SubscribeForm } from 'components/subscribe-form';
import { FC } from 'react';

const IndexPage: FC = () => {
  const { user, error, isLoading } = useUser();
  let contents = <div />;
  if (isLoading) {
    contents = <div>Loading...</div>;
  } else if (error) {
    contents = <div>{error.message}</div>;
  } else if (user) {
    contents = (
      <div>
        Welcome {user.name}!{' '}
        <NextChakraLink href="/api/auth/logout">Logout</NextChakraLink>
      </div>
    );
  } else {
    contents = <NextChakraLink href="/api/auth/login">Login</NextChakraLink>;
  }

  return (
    <Layout title="Letryx" hideNav>
      <Box textAlign="center" fontSize="xl" pt={8}>
        <SubscribeForm />
      </Box>
      <Box textAlign="center">{contents}</Box>
    </Layout>
  );
};

export default IndexPage;
