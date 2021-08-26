import { SettingsIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
} from '@chakra-ui/react';
import { useAppContext } from 'components/app-provider';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { CgLogOut } from 'react-icons/cg';

export const UserDropdown: FC = () => {
  const { currentUser, isAppLoading } = useAppContext();
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
        <Link href="/api/auth/logout" _hover={{ textDecoration: 'none' }}>
          <MenuItem icon={<Icon w={4} h={4} as={CgLogOut} />}>Log Out</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  ) : (
    <Skeleton isLoaded={!isAppLoading}>
      <Link
        href={`/api/auth/login?returnTo=${router.asPath}`}
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
      >
        <Button colorScheme="gray" variant="solid" size="sm">
          Log In
        </Button>
      </Link>
    </Skeleton>
  );
};
