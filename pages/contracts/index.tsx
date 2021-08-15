import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { Layout } from 'components/layout';
import {
  SearchResultFragment,
  useSearchSecContractsQuery,
} from 'lib/generated/graphql/apollo-schema';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar: FC<
  InputProps & { setValue: Dispatch<SetStateAction<string>> }
> = ({ placeholder, setValue, ...props }) => (
  <InputGroup>
    <InputLeftElement>
      <MdSearch fontSize="1.5rem" />
    </InputLeftElement>
    <Input
      placeholder={placeholder}
      aria-label={placeholder}
      _placeholder={{ color: useColorModeValue('gray.600', 'gray.200') }}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
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

interface SearchParams {
  search: string;
}

const ContractsPage: FC = () => {
  // const { data } = useGetSequentialSecContractsQuery({
  //   variables: { limit: 30, offset: 0 },
  // });

  const [search, setSearch] = useState('');

  // const [searchDebounced] = useDebounce(search, 200);

  const searchParams: SearchParams = { search };

  const { data } = useSearchSecContractsQuery({
    variables: searchParams,
  });

  const aggregates = data?.sec_search_aggregate?.aggregate || {
    count: 0,
    filing_count: 0,
    company_count: 0,
  };
  const contracts = data?.sec_search || [];

  return (
    <Layout title="Letryx">
      <SearchBar placeholder="Search" setValue={setSearch} />
      <HStack>
        <Text>{aggregates.count} contracts</Text>
        <Text>{aggregates.company_count} companies</Text>
        <Text>{aggregates.filing_count} filings</Text>
      </HStack>
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
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractsPage;
