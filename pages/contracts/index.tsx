/* eslint-disable react/no-array-index-key */
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
  Skeleton,
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
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { MdFilterList, MdSearch } from 'react-icons/md';

type SearchBarProps = InputProps & {
  contractCount: number;
  setValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
};

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  setValue,
  contractCount,
  isLoading,
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
      <Skeleton minWidth="3rem" isLoaded={!isLoading} mr={2}>
        {contractCount.toLocaleString()}
      </Skeleton>{' '}
      contracts
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
  isLoading: boolean;
};

const Filters: FC<FilterProps> = ({
  companyCount,
  minDate,
  setMinDate,
  maxDate,
  setMaxDate,
  isLoading,
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
                <Text fontSize="1.2rem" height="100%" as="span">
                  Companies{' '}
                  <Skeleton isLoaded={!isLoading} display="inline">
                    ({companyCount.toLocaleString()})
                  </Skeleton>
                </Text>
                <Spacer />
                <Tooltip label="Filter companies by name">
                  <IconButton
                    mt={1}
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
                <Text pt={1} fontSize="1.2rem" height="100%" as="span">
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

  // fix skeleton loading errors
  const [, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // const [searchDebounced] = useDebounce(search, 200);

  const { data, loading: isLoading } = useSearchSecContractsQuery({
    variables: {
      minDate: minLocalDate,
      maxDate: maxLocalDate,
      search,
    },
    skip: typeof window === undefined,
  });

  const contracts = data?.sec_search || [];
  const aggregates = data?.sec_search_aggregate?.aggregate || {
    count: 0,
    filing_count: 0,
    company_count: 0,
  };

  return (
    <Layout title="Contract Search">
      <Stack direction={['column', 'column', 'row']}>
        <Filters
          companyCount={aggregates.company_count}
          minWidth={60}
          pt={[0, 0, 0]}
          {...{ isLoading, minDate, setMinDate, maxDate, setMaxDate }}
        />
        <VStack width="100%">
          <SearchBar
            isLoading={isLoading}
            contractCount={aggregates.count}
            placeholder="Search"
            setValue={setSearch}
          />
          <Box
            overflowY={['auto', 'auto', 'scroll']}
            maxHeight={['100%', '100%', '80vh']}
          >
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
                {isLoading
                  ? Array(20)
                      .fill(0)
                      .map((_, i) => (
                        <Tr key={`tr-${i}`}>
                          <Td colSpan={4}>
                            <Skeleton width="100%">Loading...</Skeleton>
                          </Td>
                        </Tr>
                      ))
                  : contracts.map((contract, i) => (
                      <ContractSnippet key={`tr-${i}`} {...contract} />
                    ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractsPage;
