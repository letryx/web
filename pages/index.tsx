import { Box, Text, VStack, Grid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
// import { NextChakraLink } from '../components/next-chakra-link';

const IndexPage: FunctionComponent = () => (
  <Layout title="Letryx">
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <VStack spacing={8}>
          <Text>
            {/* <NextChakraLink href="/properties" color="teal.500">
              View the properties
            </NextChakraLink>{' '} */}
          </Text>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default IndexPage;
