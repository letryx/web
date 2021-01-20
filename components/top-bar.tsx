import { FunctionComponent } from 'react';
import {
  Avatar,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Icon,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import { TriangleDownIcon, SettingsIcon } from '@chakra-ui/icons';
import { CgLogOut } from 'react-icons/cg';
import { name } from 'faker/locale/en_US';
import { ColorModeSwitcher } from './color-mode-switcher';
import { NextChakraLink } from './next-chakra-link';

const TopBar: FunctionComponent = () => (
  <header>
    <Flex py={4} justifyContent="space-between" alignItems="right" mb={8}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        justifySelf="flex-start"
      >
        <nav>
          <HStack spacing={12}>
            <NextChakraLink href="/" display="flex">
              <Heading size="lg" mt={-0.5}>
                Letryx
              </Heading>
            </NextChakraLink>
          </HStack>
        </nav>
      </Flex>
      <HStack justifySelf="flex-end" spacing={1}>
        <ColorModeSwitcher />
        <Menu>
          <MenuButton
            as={Button}
            backgroundColor="rgba(0,0,0,0)"
            rounded="full"
            pl={2}
          >
            <HStack mx={-1} spacing={1}>
              <Avatar name={name.findName()} fontWeight="700" size="sm" />
              <TriangleDownIcon ml={3} mr={-1} w={3} h3={4} color="gray.400" />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<Icon as={SettingsIcon} />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem icon={<Icon w={4} h={4} as={CgLogOut} />}>
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  </header>
);

export { TopBar };
