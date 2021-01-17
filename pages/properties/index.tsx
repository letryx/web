import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import { properties } from '../../utils/sample-data';
import { PropertySummary } from '../../components/PropertySummary';
import { NextChakraLink } from '../../components/NextChakraLink';
import { RootProvider } from '../../providers/RootProvider';

interface PropertiesProps {
  cookies?: string;
}

const PropertiesPage = ({ cookies }: PropertiesProps): JSX.Element => (
  <RootProvider cookies={cookies}>
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
  </RootProvider>
);

export default PropertiesPage;

export { getServerSideProps } from '../../providers/RootProvider';
