import {
  Skeleton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { ContractModal } from 'components/contract/modal';
import { ShowDate } from 'components/date';
import { SearchResultFragment } from 'lib/generated/graphql/apollo-schema';
import { FC } from 'react';

export const PAGE_SIZE = 12;

interface ContractTableProps {
  isLoading: boolean;
  contracts: SearchResultFragment[];
}

interface ContractRowProps {
  contract: SearchResultFragment;
}

const ContractRow: FC<ContractRowProps> = ({ contract }) => {
  const {
    accession_number,
    sequence,
    company_name,
    filing_type,
    attachment_type,
    filing_date,
    description,
  } = contract;
  return (
    <Tr key={`row-${accession_number}-${sequence}`}>
      <Td isNumeric>
        <ShowDate kind="short" date={filing_date} />
      </Td>
      <Td>
        <Text>{description || `${attachment_type}`}</Text>
        <Text>{company_name}</Text>
      </Td>
      <Th isNumeric>
        <Text>{filing_type}</Text>
      </Th>
      <Td isNumeric>
        <ContractModal {...contract} />
      </Td>
    </Tr>
  );
};

export const TableContent: FC<ContractTableProps> = ({
  contracts,
  isLoading,
}) => {
  return (
    <Table variant="simple" my="6" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
          <Th isNumeric>Filing Date</Th>
          <Th width="60%">Description / Filer</Th>
          <Th isNumeric>Filing Type</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {isLoading
          ? [...Array(PAGE_SIZE).keys()].map(() => (
              <Tr>
                <Td colSpan={4}>
                  <Skeleton width="100%" height="43px" />
                </Td>
              </Tr>
            ))
          : contracts.map((contract) => <ContractRow contract={contract} />)}
      </Tbody>
    </Table>
  );
};
