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
  useDisclosure,
} from '@chakra-ui/react';
import { QueryModal } from 'components/contract/query-modal';
import { Dispatch, FC, SetStateAction } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { GrChat, GrClear } from 'react-icons/gr';
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
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
          )}
        </Text>
      </InputRightAddon>
      <Button
        ml="2"
        colorScheme="messenger"
        onClick={onClickAdd}
        isLoading={addIsLoading}
        leftIcon={<FaPlusCircle />}
        textAlign="center"
        width="70px"
        minWidth="70px"
      >
        All
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
            <Text>
              {compSetSize.toLocaleString()} Comp{compSetSize > 1 && 's'}
            </Text>
          </MenuButton>
          <MenuList textAlign="left">
            <MenuItem onClick={clearCompSet} icon={<GrClear />}>
              Clear
            </MenuItem>
            <MenuItem icon={<Icon as={GrChat} />} onClick={onOpen}>
              Submit Query
            </MenuItem>
          </MenuList>
          <QueryModal {...{ compSetSize, isOpen, onClose }} />
        </Menu>
      )}
    </InputGroup>
  );
};
