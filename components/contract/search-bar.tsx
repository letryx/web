import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { GrClear } from 'react-icons/gr';
import { MdSearch } from 'react-icons/md';

type SearchBarProps = InputProps & {
  contractCount?: number;
  setValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  onClickAdd: () => void;
  clearCompSet: () => void;
  addIsLoading: boolean;
  compSetSize: number;
};

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  setValue,
  contractCount,
  isLoading,
  onClickAdd,
  addIsLoading,
  compSetSize,
  clearCompSet,
  ...props
}) => (
  <InputGroup>
    <InputLeftElement>
      <MdSearch fontSize="1.5rem" />
    </InputLeftElement>
    <Input
      type="text"
      autoFocus
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete="off"
      placeholder={placeholder}
      aria-label={placeholder}
      _placeholder={{ color: useColorModeValue('gray.600', 'gray.200') }}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
    <InputRightAddon textAlign="right">
      <Text>
        {contractCount ? (
          contractCount.toLocaleString()
        ) : (
          <Skeleton minWidth="3rem" isLoaded={!isLoading} mr={2}>
            99,999
          </Skeleton>
        )}{' '}
        contracts
      </Text>
    </InputRightAddon>
    <Button
      ml="2"
      colorScheme="messenger"
      width={compSetSize > 0 ? '20px' : '90px'}
      onClick={onClickAdd}
      isLoading={addIsLoading}
      leftIcon={compSetSize > 0 ? undefined : <FaPlusCircle />}
      textAlign="center"
    >
      {compSetSize > 0 ? <Icon as={FaPlusCircle} /> : 'Add'}
    </Button>
    {compSetSize > 0 && (
      <Menu isLazy>
        <MenuButton
          as={Button}
          ml="2"
          colorScheme="green"
          rightIcon={<Icon as={ChevronDownIcon} />}
          minWidth="150px"
        >
          <Text>{compSetSize.toLocaleString()} Comps</Text>
        </MenuButton>
        <MenuList textAlign="left">
          <MenuItem onClick={clearCompSet} icon={<GrClear />}>
            Clear
          </MenuItem>
        </MenuList>
      </Menu>
    )}
  </InputGroup>
);
