import { Box, Code, Text, Link, VStack, Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import { NextChakraLink } from '../components/next-chakra-link';

const IndexPage: FunctionComponent = () => (
  <Layout title="Letryx">
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <VStack spacing={8}>
          <Text>
            Edit <Code fontSize="xl">pages/index.tsx</Code> and save to reload.
            <br />
            <br />
            <NextChakraLink href="/properties" color="teal.500">
              View the properties
            </NextChakraLink>{' '}
            to see the Nextjs <Code fontSize="xl">&lt;Link&gt;</Code> in action
          </Text>
          <Link
            color="teal.500"
            fontSize="2xl"
            href="https://chakra-ui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default IndexPage;
