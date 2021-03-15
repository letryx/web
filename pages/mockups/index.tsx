import { Container, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';

const MockupLink: FC<{ name: string; page: string }> = ({
  name,
  page,
  children,
}) => (
  <NextChakraLink
    href={`/mockups/${page}`}
    boxShadow="md"
    _hover={{ boxShadow: 'lg', textDecoration: 'underline' }}
    textAlign="left"
    p={4}
  >
    <Text>{name}</Text>
    <Text fontSize="sm" style={{ display: 'inline-block' }}>
      {children}
    </Text>
  </NextChakraLink>
);

const mockup: FC = () => (
  <Layout title="Letryx">
    <Container textAlign="center" fontSize="xl">
      <Stack>
        <Text>Mockups</Text>
        <MockupLink name="Permitted Encumbrances" page="permitted-encumbrances">
          A qualitative analysis of a contract clause with regards to common
          inclusions/exceptions and buyer vs seller friendliness.
        </MockupLink>
      </Stack>
    </Container>
  </Layout>
);

export default mockup;
