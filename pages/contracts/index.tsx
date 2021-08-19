import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Box,
  BoxProps,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputProps,
  InputRightAddon,
  Spacer,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { Layout } from 'components/layout';
import { convert, LocalDate, nativeJs } from 'js-joda';
import {
  SearchResultFragment,
  useSearchSecContractsQuery,
} from 'lib/generated/graphql/apollo-schema';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { MdFilterList, MdSearch } from 'react-icons/md';

type SearchBarProps = InputProps & {
  contractCount: number;
  setValue: Dispatch<SetStateAction<string>>;
};

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  setValue,
  contractCount,
  ...props
}) => (
  <InputGroup>
    <InputLeftElement>
      <MdSearch fontSize="1.5rem" />
    </InputLeftElement>
    <Input
      autoFocus
      placeholder={placeholder}
      aria-label={placeholder}
      _placeholder={{ color: useColorModeValue('gray.600', 'gray.200') }}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
    <InputRightAddon textAlign="right">
      {contractCount.toLocaleString()} contracts
    </InputRightAddon>
  </InputGroup>
);

const ContractSnippet: FC<SearchResultFragment> = ({
  company_name,
  filing_type,
  description,
  attachment_type,
}) => (
  <Tr>
    <Td>{company_name}</Td>
    <Td>{filing_type}</Td>
    <Td>{attachment_type}</Td>
    <Td>{description}</Td>
  </Tr>
);

type FilterProps = BoxProps & {
  companyCount: number;
  minDate: Date;
  maxDate: Date;
  setMinDate: (date: Date) => void;
  setMaxDate: (date: Date) => void;
};

const Filters: FC<FilterProps> = ({
  companyCount,
  minDate,
  setMinDate,
  maxDate,
  setMaxDate,
  ...props
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box {...props}>
      <Stack>
        <Box pr={3} pb={5}>
          <FormControl>
            <FormLabel>
              <Flex pb={1}>
                <Text height="100%" as="span">
                  Companies ({companyCount.toLocaleString()})
                </Text>
                <Spacer />
                <Tooltip label="Filter companies by name">
                  <IconButton
                    variant="outline"
                    size="xs"
                    aria-label="Search company"
                    icon={<MdFilterList />}
                  />
                </Tooltip>
              </Flex>
            </FormLabel>
            <CheckboxGroup>
              <Checkbox>yeah ok</Checkbox>
            </CheckboxGroup>
            <FormHelperText>More...</FormHelperText>
          </FormControl>
        </Box>
        <Box pr={3} pb={5}>
          <FormControl>
            <FormLabel>
              <Flex pb={1}>
                <Text pt={1} height="100%" as="span">
                  Filing Date
                </Text>
              </Flex>
            </FormLabel>
            <InputGroup textAlign="right" pr={3}>
              <InputLeftAddon width={20}>After:</InputLeftAddon>
              <SingleDatepicker date={minDate} onDateChange={setMinDate} />
            </InputGroup>
            <InputGroup pr={3}>
              <InputLeftAddon width={20}>Before:</InputLeftAddon>
              <SingleDatepicker date={maxDate} onDateChange={setMaxDate} />
            </InputGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

const toLocalDate = (date: Date) => LocalDate.from(nativeJs(date));

const ContractsPage: FC = () => {
  // const { data } = useGetSequentialSecContractsQuery({
  //   variables: { limit: 30, offset: 0 },
  // });

  const [search, setSearch] = useState('');
  const [minLocalDate, setMinLocalDate] = useState(LocalDate.of(1990, 1, 1));
  const [maxLocalDate, setMaxLocalDate] = useState(LocalDate.now());
  const minDate = convert(minLocalDate).toDate();
  const maxDate = convert(maxLocalDate).toDate();
  const setMinDate = (date: Date) => setMinLocalDate(toLocalDate(date));
  const setMaxDate = (date: Date) => setMaxLocalDate(toLocalDate(date));

  // const [searchDebounced] = useDebounce(search, 200);

  const { data } = useSearchSecContractsQuery({
    variables: {
      minDate: minLocalDate,
      maxDate: maxLocalDate,
      search,
    },
  });

  const aggregates = data?.sec_search_aggregate?.aggregate || {
    count: 0,
    filing_count: 0,
    company_count: 0,
  };
  const contracts = data?.sec_search || [];

  return (
    <Layout title="Contract Search">
      <Stack direction={['column', 'column', 'row']}>
        <Filters
          companyCount={aggregates.company_count}
          minWidth={60}
          pt={[0, 0, 0]}
          {...{ minDate, setMinDate, maxDate, setMaxDate }}
        />
        <VStack width="100%">
          <SearchBar
            contractCount={aggregates.count}
            placeholder="Search"
            setValue={setSearch}
          />
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Filer</Th>
                <Th>Filing Type</Th>
                <Th>Attachment</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contracts.map((contract) => (
                <ContractSnippet {...contract} />
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractsPage;
