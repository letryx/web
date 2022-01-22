import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Link, Stack, Text } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';
import { FC } from 'react';

const MockupLink: FC<{ name: string; page: string; isExternal?: boolean }> = ({
  name,
  page,
  children,
  isExternal = false,
}) => {
  const LinkType = isExternal ? Link : NextChakraLink;
  return (
    <LinkType
      isExternal={isExternal}
      href={isExternal ? page : `/mockups/${page}`}
      boxShadow="md"
      _hover={{ boxShadow: 'lg', textDecoration: 'underline' }}
      textAlign="left"
      p={4}
    >
      <Text>
        {name}
        {isExternal && <ExternalLinkIcon mx={2} pb={1.5} />}
      </Text>
      <Text fontSize="sm" style={{ display: 'inline-block' }}>
        {children}
      </Text>
    </LinkType>
  );
};

const mockup: FC = () => (
  <Layout title="Letryx">
    <Container textAlign="center" fontSize="xl">
      <Stack>
        <Text>Mockups</Text>
        <MockupLink name="Permitted Encumbrances" page="permitted-encumbrances">
          A qualitative analysis of a contract clause with regards to common
          inclusions/exceptions and buyer vs seller friendliness.
        </MockupLink>
        <MockupLink
          name="Permitted Encumbrances with filters"
          page="/img/mockups/permitted-encumbrances.png"
          isExternal
        >
          A qualitative analysis of a contract clause with regards to common
          inclusions/exceptions and buyer vs seller friendliness with filters.
        </MockupLink>
        <MockupLink
          name="Indemnity Deductible"
          page="https://web-scatter-mockup.vercel.app"
          isExternal
        >
          A quantitative analysis of indemnity terms from a corpus of similar
          contracts.
        </MockupLink>
      </Stack>
    </Container>
  </Layout>
);

export default mockup;
