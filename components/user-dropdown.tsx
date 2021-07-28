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
import { FC } from 'react';
import { CgLogOut } from 'react-icons/cg';

export const UserDropdown: FC = () => {
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
