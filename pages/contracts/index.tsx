import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Layout } from 'components/layout';
import {
  ContractListFragment,
  useGetSequentialSecContractsQuery,
} from 'lib/generated/graphql/apollo-schema';
import { FC } from 'react';

const ContractSnippet: FC<ContractListFragment> = ({
  company_name,
  description,
  filing_type,
}) => (
  <Tr>
    <Td>{company_name}</Td>
    <Td>{filing_type}</Td>
    <Td>{description}</Td>
  </Tr>
);

const ContractsPage: FC = () => {
  const { data } = useGetSequentialSecContractsQuery({
    variables: { limit: 30, offset: 0 },
  });
  const contracts = data?.sec_contract || [];

  return (
    <Layout title="Letryx">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Filer</Th>
            <Th>Filing Type</Th>
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
