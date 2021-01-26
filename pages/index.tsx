import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import { SubscribeForm } from '../components/subscribe-form';
// import { NextChakraLink } from '../components/next-chakra-link';

const IndexPage: FunctionComponent = () => (
  <Layout title="Letryx">
    <Box textAlign="center" fontSize="xl">
      <SubscribeForm />
    </Box>
  </Layout>
);

export default IndexPage;
