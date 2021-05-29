import { Container, Stack, Text, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const MockupLink: FC<{ name: string; page: string }> = ({
  name,
  page,
  children,
}) => {
  const isExternal = page.substr(0, 4) === 'http';
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
          name="Indemnity Deductible"
          page="https://web-scatter-mockup.vercel.app"
        >
          A quantitative analysis of indemnity terms from a corpus of similar
          contracts.
        </MockupLink>
      </Stack>
    </Container>
  </Layout>
);

export default mockup;
