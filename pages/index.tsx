import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Layout } from 'components/layout';
import { SubscribeForm } from 'components/subscribe-form';

const IndexPage: FC = () => (
  <Layout title="Letryx" hideNav>
    <Box textAlign="center" fontSize="xl" pt={8}>
      <SubscribeForm />
    </Box>
  </Layout>
);

export default IndexPage;
