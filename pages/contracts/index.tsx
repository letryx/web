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
  List,
  ListItem,
  Skeleton,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { Layout } from 'components/layout';
import {
  SearchResultFragment,
  useSearchSecContractsQuery,
} from 'lib/generated/graphql/apollo-schema';
import { Dispatch, FC, SetStateAction, useState } from 'react';
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

const ContractSnippet: FC<SearchResultFragment & { isLoading: boolean }> = ({
  company_name,
  filing_type,
  description,
  attachment_type,
  filing_date,
  isLoading,
}) => (
  <Skeleton isLoaded={!isLoading}>
    <ListItem>
      <Box>
        {filing_date}
        {company_name}
        {filing_type}
        {attachment_type}
        {description}
      </Box>
    </ListItem>
  </Skeleton>
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

const ContractsPage: FC = () => {
  const [search, setSearch] = useState('');
  const [minDate, setMinDate] = useState(new Date(1990, 0, 1));
  const [maxDate, setMaxDate] = useState(new Date());

  const { data, loading: isLoading } = useSearchSecContractsQuery({
    variables: {
      minDate,
      maxDate,
      search,
    },
    fetchPolicy: 'cache-and-network',
  });

  const aggregates = data?.sec_search_aggregate.aggregate || {
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
            overflowY={['auto', 'auto', 'auto']}
            maxHeight={['100%', '100%', '80vh']}
            minHeight="3rem"
            width="100%"
          >
            <List variant="striped" width="100%" spacing={3}>
              {isLoading
                ? Array(20)
                    .fill(0)
                    .map((_, i) => (
                      <ContractSnippet
                        key={`tr-skele-${i}`}
                        {...{
                          description: 'X'.repeat(60),
                          isLoading,
                        }}
                      />
                    ))
                : contracts.map((contract) => (
                    <ContractSnippet
                      isLoading={false}
                      key={`tr-data-${contract.accession_number}-${contract.sequence}`}
                      {...contract}
                    />
                  ))}
            </List>
          </Box>
        </VStack>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractsPage;
