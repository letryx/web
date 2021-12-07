import {
  Button,
  HStack,
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
import { FaMinus, FaPlus } from 'react-icons/fa';

export const PAGE_SIZE = 12;

interface ContractTableProps {
  isLoading: boolean;
  contracts: SearchResultFragment[];
  compSet: Set<string>;
  addContract: (contract: SearchResultFragment) => void;
}

interface ContractRowProps {
  contract: SearchResultFragment;
  addContract: (contract: SearchResultFragment) => void;
  isAdded: boolean;
}

const ContractRow: FC<ContractRowProps> = ({
  contract,
  addContract,
  isAdded,
}) => {
  const {
    accession_number,
    sequence,
    company_name,
    filing_type,
    attachment_type,
    filing_date,
    description,
    contract_type,
  } = contract;
  return (
    <Tr key={`row-${accession_number}-${sequence}`}>
      <Td isNumeric>
        <ShowDate kind="short" date={filing_date} />
      </Td>
      <Th isNumeric>
        <Text fontSize="0.9rem" fontWeight="semibold">
          {filing_type}
        </Text>
        <Text fontSize="0.7rem" fontWeight="normal">
          {attachment_type}
        </Text>
      </Th>
      <Td>
        <Text casing="capitalize">
          {description?.toLowerCase() ||
            contract_type?.toLowerCase() ||
            `${attachment_type}`}
        </Text>
        <Text fontWeight="semibold" casing="capitalize">
          {company_name.toLowerCase()}
        </Text>
      </Td>
      <Td isNumeric>
        <HStack>
          <Button
            variant="outline"
            colorScheme={isAdded ? 'red' : 'messenger'}
            onClick={() => addContract(contract)}
            size="xs"
          >
            {isAdded ? <FaMinus /> : <FaPlus />}
          </Button>
          <ContractModal {...contract} />
        </HStack>
      </Td>
    </Tr>
  );
};

export const TableContent: FC<ContractTableProps> = ({
  contracts,
  isLoading,
  addContract,
  compSet,
}) => (
  <Table variant="simple" borderWidth="1px" fontSize="0.9rem">
    <Thead bg={mode('gray.50', 'gray.800')}>
      <Tr>
        <Th isNumeric>Filing Date</Th>
        <Th width="12%" isNumeric>
          Filing Type
        </Th>
        <Th width="60%">Description / Filer</Th>
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
        : contracts.map((contract) => (
            <ContractRow
              isAdded={!!(contract.uid && compSet.has(contract.uid))}
              {...{ contract, addContract }}
            />
          ))}
    </Tbody>
  </Table>
);
