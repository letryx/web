import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Layout } from '../../components/Layout';
import { properties } from '../../utils/sample-data';
import { PropertySummary } from '../../components/PropertySummary';
import { NextChakraLink } from '../../components/NextChakraLink';

interface PropertiesProps {
  cookies?: string;
}

const PropertiesPage: FunctionComponent<PropertiesProps> = ({ cookies }) => (
  <Layout title="Next.js + TypeScript example | View properties">
    <Heading mb={4}>Available this weekend</Heading>
    <Wrap>
      {properties.map((property) => (
        <WrapItem key={property.id}>
          <NextChakraLink
            href="/properties/[id]"
            as={`/properties/${property.id}`}
          >
            <PropertySummary property={property} />
          </NextChakraLink>
        </WrapItem>
      ))}
    </Wrap>
  </Layout>
);

export default PropertiesPage;
