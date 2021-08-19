import { Box } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { SubscribeForm } from 'components/subscribe-form';
import { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <Layout title="Letryx">
      <Box textAlign="center" fontSize="xl" pt={8}>
        <SubscribeForm />
      </Box>
    </Layout>
  );
};

export default IndexPage;
