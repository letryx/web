import {
  Box,
  Heading,
  HeadingProps,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackDivider,
  Text,
  TextProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from 'components/logo';
import { NextChakraLink } from 'components/next-chakra-link';
import { SocialLinks } from 'components/social-links';
import { FC } from 'react';

export const FooterHeading: FC<HeadingProps> = (props) => (
  <Heading
    as="h4"
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);

export const Copyright: FC<TextProps> = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Letryx LLC. All rights reserved.
  </Text>
);

export const LinkGrid: FC<SimpleGridProps> = (props) => (
  <SimpleGrid columns={3} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Company</FooterHeading>
      <Stack>
        <NextChakraLink href="/about">About</NextChakraLink>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <NextChakraLink href="/">Updates</NextChakraLink>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <NextChakraLink href="/docs/privacy-policy">Privacy</NextChakraLink>
      </Stack>
    </Box>
  </SimpleGrid>
);

export const Footer: FC = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="1200px"
    pt={20}
    pb={12}
    px={{ base: '4', md: '8' }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10', lg: '28' }}
      >
        <Box flex="1">
          <Logo />
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '10', md: '20' }}
        >
          <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
          {/* <SubscribeForm width={{ base: 'full', md: 'sm' }} /> */}
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialLinks
          socialLinks={[
            {
              social: 'linkedin',
              href: 'https://www.linkedin.com/company/letryx',
            },
            {
              social: 'github',
              href: 'https://github.com/letryx',
            },
            {
              social: 'email',
              href: 'mailto:support@letryx.com',
            },
          ]}
        />
      </Stack>
    </Stack>
  </Box>
);
