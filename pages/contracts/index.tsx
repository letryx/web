import { usePagination } from '@ajna/pagination';
import { useApolloClient } from '@apollo/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Box, Stack, VStack } from '@chakra-ui/react';
import { ContractFilters } from 'components/contract/filters';
import { SearchBar } from 'components/contract/search-bar';
import { PAGE_SIZE, TableContent } from 'components/contract/table';
import { Layout } from 'components/layout';
import { Paginator } from 'components/paginator';
import {
  SearchResultFragment,
  SearchSecContractsDocument,
  SearchSecContractsQuery,
  SearchSecContractsQueryVariables,
  useSearchSecContractsQuery,
} from 'lib/generated/graphql/apollo-schema';
import { map } from 'lodash';
import { FC, useEffect, useMemo, useState } from 'react';

const ContractsPage: FC = () => {
  const [search, setSearch] = useState('');
  const now = new Date();
  const [minDate, setMinDate] = useState(new Date(1990, 0, 1));
  const [maxDate, setMaxDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), now.getDay())
  );

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

  const [selectedCompanies, setSelectedCompanies] = useState<
    undefined | string[]
  >();

  const [selectedContractType, setSelectedContractType] = useState<
    undefined | string
  >();
  const { data, loading: isLoading } = useSearchSecContractsQuery({
    variables: {
      minDate,
      maxDate,
      search,
      contractType: selectedContractType,
      companyCiks: selectedCompanies ? selectedCompanies.join(',') : undefined,
      limit: PAGE_SIZE,
      offset,
    },
  });

  const { company_count: companyCount, count: contractCount } =
    data?.sec_search_aggregate.aggregate || {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const companies = useMemo(() => {
    if (data?.companies) {
      // eslint-disable-next-line
      return map(data.companies, (x) => x.company_cik);
    }
    return [];
  }, [data?.companies]);

  useEffect(() => setTotalContracts(contractCount), [contractCount]);

  const contracts = data?.sec_search || [];

  const [compSet, setCompSet] = useState(new Set<string>([]));
  const [compSetSize, setCompSetSize] = useState(0);
  const [addIsLoading, setAddIsLoading] = useState(false);
  const apolloClient = useApolloClient();
  const onClickAdd = async () => {
    setAddIsLoading(true);
    const res = await apolloClient.query<
      SearchSecContractsQuery,
      SearchSecContractsQueryVariables
    >({
      query: SearchSecContractsDocument,
      variables: {
        uidsOnly: true,
        search,
        minDate,
        maxDate,
        contractType: selectedContractType,
        companyCiks: selectedCompanies
          ? selectedCompanies.join(',')
          : undefined,
      },
    });
    setAddIsLoading(false);
    // eslint-disable-next-line no-console
    if (res.error) console.log('error fetching add comps', res.error);
    (res.data.sec_search_aggregate?.nodes || []).forEach(({ uid }) => {
      if (uid) compSet.add(uid);
    });
    setCompSet(compSet);
    setCompSetSize(compSet.size);
  };

  const addContract = ({ uid }: SearchResultFragment): void => {
    if (!uid) return;
    if (compSet.has(uid)) {
      compSet.delete(uid);
    } else {
      compSet.add(uid);
    }
    setCompSet(compSet);
    setCompSetSize(compSet.size);
  };

  return (
    <Layout title="Contracts" showMatterNumber>
      <Stack direction={['column', 'column', 'row']}>
        <ContractFilters
          minWidth={60}
          pt={[0, 0, 7]}
          {...{
            isLoading,
            companyCount,
            minDate,
            setMinDate,
            maxDate,
            setMaxDate,
            selectedContractType,
            setSelectedContractType,
            selectedCompanies,
            setSelectedCompanies,
            searchCompanies: companies,
          }}
        />
        <VStack width="100%">
          <SearchBar
            clearCompSet={() => {
              setCompSet(new Set<string>([]));
              setCompSetSize(0);
            }}
            placeholder="Search"
            setValue={setSearch}
            {...{
              isLoading,
              addIsLoading,
              contractCount,
              onClickAdd,
              compSetSize,
            }}
          />
          <Box minHeight="3rem" width="100%">
            <TableContent {...{ contracts, compSet, addContract, isLoading }} />
          </Box>
          <Paginator
            pagesCount={pagesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isDisabled={isLoading}
            pages={pages}
          />
        </VStack>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractsPage;
