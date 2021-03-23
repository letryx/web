import { SettingsIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useAppContext } from 'components/app-provider';
import { ColorModeSwitcher } from 'components/color-mode-switcher';
import { NextChakraLink } from 'components/next-chakra-link';
import { FC } from 'react';
import { CgLogOut } from 'react-icons/cg';

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

const UserDropdown: FC = () => {
  const { currentUser } = useAppContext();

  return currentUser ? (
    <Menu>
      <MenuButton
        as={Button}
        backgroundColor="rgba(0,0,0,0)"
        rounded="full"
        pl={2}
      >
        <HStack mx={-1} spacing={1}>
          <Avatar name={currentUser.name} fontWeight="700" size="sm" />
          <TriangleDownIcon ml={3} mr={-1} w={3} h3={4} color="gray.400" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Icon as={SettingsIcon} />}>Settings</MenuItem>
        <MenuDivider />
        <MenuItem icon={<Icon w={4} h={4} as={CgLogOut} />}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <div />
  );
};

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
