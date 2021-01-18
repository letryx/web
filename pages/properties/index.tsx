import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Layout } from '../../components/layout';
import { properties } from '../../utils/sample-data';
import { NextChakraLink } from '../../components/next-chakra-link';

const PropertiesPage: FunctionComponent = () => (
  <Layout title="Next.js + TypeScript example | View properties">
    <Heading mb={4}>Available this weekend</Heading>
    <Wrap>
      {properties.map((property) => (
        <WrapItem key={property.id}>
          <NextChakraLink
            href="/properties/[id]"
            as={`/properties/${property.id}`}
          ></NextChakraLink>
        </WrapItem>
      ))}
    </Wrap>
  </Layout>
);

export default PropertiesPage;
