import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import { Container, Flex, Heading, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './color-mode-switcher';
import { NextChakraLink } from './next-chakra-link';
import { Footer } from './footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout: FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <Container maxWidth="1200px" minHeight="75vh">
        <header>
          <Flex
            py={4}
            justifyContent="space-between"
            alignItems="center"
            mb={8}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <nav>
                <HStack spacing={12}>
                  <NextChakraLink
                    href="/"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Heading size="lg">Letryx</Heading>
                  </NextChakraLink>
                </HStack>
              </nav>
            </Flex>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </header>
        {children}
      </Container>
      <Footer />
    </Container>
  </div>
);
