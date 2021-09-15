import {
  Box,
  Flex,
  Spacer,
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

export const ContractSnippet: FC<SearchResultFragment> = ({
  description,
  children,
  attachment_type,
  company_name,
  filing_type,
  filing_date,
}) => (
  <Flex>
    <Box alignSelf="center" px={4} width="160px" textAlign="right">
      <ShowDate date={filing_date} kind="short" />
    </Box>
    <Box flexShrink={2} flexGrow={2}>
      <Text flexShrink={3} casing="capitalize">
        {description?.toLowerCase() || attachment_type}
      </Text>
      <Text flexShrink={3}>
        {company_name} ({filing_type})
      </Text>
    </Box>
    <Spacer minWidth="1rem" />
    <Box alignSelf="center">{children}</Box>
  </Flex>
);

interface ContractTableProps {
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
      <Th>{filing_type}</Th>
      <Td textAlign="right">
        <ContractModal {...contract} />
      </Td>
    </Tr>
  );
};

export const TableContent: FC<ContractTableProps> = ({ contracts }) => {
  return (
    <Table variant="simple" my="6" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
          <Th isNumeric>Filing Date</Th>
          <Th>Description / Filer</Th>
          <Th>Filing Type</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {contracts.map((contract) => (
          <ContractRow contract={contract} />
        ))}
      </Tbody>
    </Table>
  );
};
