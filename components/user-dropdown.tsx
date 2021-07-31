import { SettingsIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useAppContext } from 'lib/app-provider';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { CgLogOut } from 'react-icons/cg';
import { NextChakraLink } from './next-chakra-link';

export const UserDropdown: FC = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();

  return currentUser?.name ? (
    <Menu>
      <MenuButton
        as={Button}
        backgroundColor="rgba(0,0,0,0)"
        rounded="full"
        pl={2}
      >
        <HStack mx={-1} spacing={1}>
          <Avatar
            name={currentUser.name}
            fontWeight="700"
            size="sm"
            {...(currentUser.photo_url ? { src: currentUser.photo_url } : {})}
          />
          <TriangleDownIcon ml={3} mr={-1} w={3} h3={4} color="gray.400" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem style={{ pointerEvents: 'none', cursor: 'default' }}>
          {currentUser.email}
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<Icon as={SettingsIcon} />}>Settings</MenuItem>
        <MenuDivider />
        <NextChakraLink
          href="/api/auth/logout"
          _hover={{ textDecoration: 'none' }}
        >
          <MenuItem icon={<Icon w={4} h={4} as={CgLogOut} />}>Log Out</MenuItem>
        </NextChakraLink>
      </MenuList>
    </Menu>
  ) : (
    <NextChakraLink
      href={`/api/auth/login?returnTo=${router.pathname}`}
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Button colorScheme="gray" variant="solid" size="sm">
        Log In
      </Button>
    </NextChakraLink>
  );
};
