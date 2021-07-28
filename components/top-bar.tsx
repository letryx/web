import { Flex, Heading, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/color-mode-switcher';
import { NextChakraLink } from 'components/next-chakra-link';
import { UserDropdown } from 'components/user-dropdown';
import { FC } from 'react';

const Nav: FC = () => (
  <nav>
    <HStack spacing={12}>
      <NextChakraLink
        href="/"
        display="flex"
        _hover={{ textDecoration: 'none' }}
      >
        <Heading size="lg" mt={-0.5}>
          Letryx
        </Heading>
      </NextChakraLink>
    </HStack>
  </nav>
);

const TopBar: FC<{ hideNav?: boolean; user?: string }> = ({
  hideNav = false,
}) => (
  <header>
    <Flex py={4} justifyContent="space-between" alignItems="right">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        justifySelf="flex-start"
      >
        {hideNav || <Nav />}
      </Flex>
      <HStack justifySelf="flex-end" spacing={1}>
        <ColorModeSwitcher />
        {hideNav || <UserDropdown />}
      </HStack>
    </Flex>
  </header>
);

export { TopBar };
