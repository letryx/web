import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from '@ajna/pagination';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Box,
  BoxProps,
  Flex,
  FormControl,
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
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { PAGE_SIZE, TableContent } from 'components/contract/table';
import { Layout } from 'components/layout';
import { useSearchSecContractsQuery } from 'lib/generated/graphql/apollo-schema';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { MdFilterList, MdSearch } from 'react-icons/md';

type SearchBarProps = InputProps & {
  contractCount?: number;
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
      {contractCount ? (
        contractCount.toLocaleString()
      ) : (
        <Skeleton minWidth="3rem" isLoaded={!isLoading} mr={2}>
          99,999
        </Skeleton>
      )}{' '}
      contracts
    </InputRightAddon>
  </InputGroup>
);

type FilterProps = BoxProps & {
  companyCount?: number;
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
      <Stack spacing={5}>
        <Box pr={[0, 0, 3]}>
          <FormControl>
            <FormLabel>
              <Flex pb={1}>
                <Text pt={1} fontSize="1.2rem" height="100%" as="span">
                  Filing Date
                </Text>
              </Flex>
            </FormLabel>
            <InputGroup>
              <InputLeftAddon width={20}>After:</InputLeftAddon>
              <SingleDatepicker date={minDate} onDateChange={setMinDate} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon width={20}>Before:</InputLeftAddon>
              <SingleDatepicker date={maxDate} onDateChange={setMaxDate} />
            </InputGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>
              <Flex pb={1}>
                <Text
                  fontSize="1.2rem"
                  height="100%"
                  as="span"
                  suppressHydrationWarning
                >
                  Companies{' '}
                  {companyCount ? (
                    `(${companyCount.toLocaleString()})`
                  ) : (
                    <Skeleton>999</Skeleton>
                  )}
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
            {/* <CheckboxGroup>
              <Checkbox>yeah ok</Checkbox>
            </CheckboxGroup>
            <FormHelperText>More...</FormHelperText> */}
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

const ContractsPage: FC = () => {
  const [search, setSearch] = useState('');
  const now = new Date();
  const [minDate, setMinDate] = useState(new Date(1990, 0, 1));
  const [maxDate, setMaxDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), now.getDay())
  );

  const pageBgColor = useColorModeValue('white', 'gray.700');
  const selectedPageBgColor = useColorModeValue('gray.200', 'gray.600');

  const [totalContracts, setTotalContracts] = useState<number | undefined>();

  const { currentPage, setCurrentPage, pagesCount, pages, offset } =
    usePagination({
      initialState: { currentPage: 1, pageSize: PAGE_SIZE },
      total: totalContracts,
      limits: {
        inner: 2,
        outer: 2,
      },
    });

  useEffect(
    () => setCurrentPage(1),
    [search, minDate, maxDate, setCurrentPage]
  );
  const { data, loading: isLoading } = useSearchSecContractsQuery({
    variables: {
      minDate,
      maxDate,
      search,
      limit: PAGE_SIZE,
      offset,
    },
  });

  const { company_count: companyCount, count: contractCount } =
    data?.sec_search_aggregate.aggregate || {};

  useEffect(() => setTotalContracts(contractCount), [contractCount]);

  const contracts = data?.sec_search || [];

  return (
    <Layout title="Contracts">
      <Stack direction={['column', 'column', 'row']}>
        <Filters
          minWidth={60}
          pt={[0, 0, 7]}
          {...{
            isLoading,
            companyCount,
            minDate,
            setMinDate,
            maxDate,
            setMaxDate,
          }}
        />
        <VStack width="100%">
          <SearchBar
            placeholder="Search"
            setValue={setSearch}
            {...{ isLoading, contractCount }}
          />
          <Box minHeight="3rem" width="100%">
            <TableContent {...{ contracts, isLoading }} />
          </Box>
          <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            isDisabled={isLoading}
          >
            <PaginationContainer justify="space-between" w="full">
              <PaginationPrevious
                backgroundColor={pageBgColor}
                _disabled={{
                  backgroundColor: selectedPageBgColor,
                  pointerEvents: 'none',
                }}
                _hover={{ backgroundColor: selectedPageBgColor }}
              >
                Previous
              </PaginationPrevious>
              <PaginationPageGroup isInline separator={<PaginationSeparator />}>
                {pages.map((page: number) => (
                  <PaginationPage
                    key={`pagination_page_${page}`}
                    px={2}
                    page={page}
                    backgroundColor={pageBgColor}
                    _current={{ backgroundColor: selectedPageBgColor }}
                    _hover={{ backgroundColor: selectedPageBgColor }}
                  />
                ))}
              </PaginationPageGroup>
              <PaginationNext
                backgroundColor={pageBgColor}
                _disabled={{
                  backgroundColor: selectedPageBgColor,
                  pointerEvents: 'none',
                }}
                _hover={{ backgroundColor: selectedPageBgColor }}
              >
                Next
              </PaginationNext>
            </PaginationContainer>
          </Pagination>
        </VStack>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractsPage;
