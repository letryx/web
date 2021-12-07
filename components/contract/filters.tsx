import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
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
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { Paginator, useFixedPagination } from 'components/paginator';
import Fuse from 'fuse.js';
import {
  CompanyFragment,
  useGetContractTypesQuery,
  useGetSecContractCompaniesQuery,
} from 'lib/generated/graphql/apollo-schema';
import {
  difference,
  filter,
  flatMap,
  forEach,
  intersection,
  map,
  take,
  uniq,
} from 'lodash';
import { FC, useEffect, useMemo, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdFilterList, MdSearch } from 'react-icons/md';
import { PAGE_SIZE } from './table';

interface CompanyRowProps {
  company: CompanyFragment;
  selected: boolean;
  toggleSelection: (cik: string, selected: boolean) => void;
}

const CompanyRow: FC<CompanyRowProps> = ({
  company,
  selected,
  toggleSelection,
}) => {
  const { company_cik, company_name, company_geo } = company;
  return (
    <Tr key={`row-${company_cik}`}>
      <Td>
        <Text fontWeight="semibold" casing="capitalize">
          {company_name.toLowerCase()}
        </Text>
      </Td>
      <Td>
        <Text fontWeight="semibold" casing="capitalize">
          {company_geo}
        </Text>
      </Td>
      <Td isNumeric>
        <Button
          variant="outline"
          colorScheme={selected ? 'red' : 'messenger'}
          onClick={() => toggleSelection(company.company_cik, !selected)}
          size="xs"
        >
          {selected ? <FaMinus /> : <FaPlus />}
        </Button>
      </Td>
    </Tr>
  );
};

interface CompanyTableProps {
  companies: CompanyFragment[];
  isLoading: boolean;
  selectedCompanies: string[] | undefined;
  toggleSelection: (cik: string, selected: boolean) => void;
  selectAll: (ciks: string[], selected: boolean) => void;
}

const CompanyTable: FC<CompanyTableProps> = ({
  companies,
  isLoading,
  toggleSelection,
  selectedCompanies,
  selectAll,
}) => {
  const [{ pagesCount, currentPage, setCurrentPage, pages }, pagedCompanies] =
    useFixedPagination(companies, 10);
  const selection = useMemo(
    () => new Set(selectedCompanies),
    [selectedCompanies]
  );
  const [allOption, setAllOption] = useState(false);

  const onToggleAllClicked = () => {
    selectAll(
      map(companies, (c) => c.company_cik),
      allOption
    );
    setAllOption(!allOption);
  };

  useEffect(() => {
    if (
      intersection(
        selectedCompanies || [],
        map(companies, (c) => c.company_cik)
      ).length === 0
    ) {
      setAllOption(true);
    }
  }, [selectedCompanies, companies, setAllOption]);
  const actionCount = useMemo(() => {
    const ciks = map(companies, (c) => c.company_cik);
    const overlap = allOption
      ? difference(ciks, selectedCompanies || [])
      : intersection(ciks, selectedCompanies || []);
    return overlap.length;
  }, [selectedCompanies, companies, allOption]);
  return (
    <>
      <Table variant="simple" borderWidth="1px" fontSize="0.9rem" mb={1}>
        <Thead bg={mode('gray.50', 'gray.800')}>
          <Tr>
            <Th>Company Name</Th>
            <Th>Geo</Th>
            <Th isNumeric>
              {allOption ? 'Select' : 'Clear'} ({actionCount})
              <Button
                variant="outline"
                colorScheme={allOption ? 'messenger' : 'red'}
                onClick={onToggleAllClicked}
                size="xs"
                ml={2}
              >
                {allOption ? <FaPlus /> : <FaMinus />}
              </Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading
            ? [...Array(PAGE_SIZE).keys()].map((page) => (
                <Tr key={page}>
                  <Td colSpan={4}>
                    <Skeleton width="100%" height="43px" />
                  </Td>
                </Tr>
              ))
            : pagedCompanies.map((company) => (
                <CompanyRow
                  key={company.company_cik}
                  company={company}
                  selected={selection.has(company.company_cik)}
                  toggleSelection={toggleSelection}
                />
              ))}
        </Tbody>
      </Table>
      <Paginator
        pagesCount={pagesCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDisabled={isLoading}
        pages={pages}
      />
    </>
  );
};

interface CompanyFilterModalProps {
  selectedCompanies: string[] | undefined;
  setSelectedCompanies: (ids: string[] | undefined) => void;
  searchCompanies: string[] | undefined;
  companyCount: number | undefined;
}

const MAX_COMPANIES_TO_SHOW = 6;

const CompanyFilterModal: FC<CompanyFilterModalProps> = ({
  setSelectedCompanies,
  selectedCompanies,
  companyCount,
  searchCompanies,
}) => {
  const [open, setOpen] = useState(false);
  const [liveSelectedCompanies, setLiveSelectedCompanies] = useState<string[]>(
    selectedCompanies || []
  );
  const { data: companiesData, loading } = useGetSecContractCompaniesQuery();
  const companyByCik = useMemo(() => {
    if (!companiesData?.sec_contract) {
      return {};
    }
    const result: { [cik: string]: CompanyFragment } = {};
    forEach(companiesData.sec_contract, (company) => {
      result[company.company_cik] = company;
    });
    return result;
  }, [companiesData]);
  const [allCompanies, companiesLoading] = useMemo(() => {
    if (!searchCompanies || !companiesData?.sec_contract) {
      return [companiesData?.sec_contract || [], true];
    }
    const searchCiks = new Set(searchCompanies);
    return [
      filter(companiesData?.sec_contract || [], (company) =>
        searchCiks.has(company.company_cik)
      ),
      false,
    ];
  }, [searchCompanies, companiesData?.sec_contract]);
  const fuse = useMemo(
    () =>
      new Fuse(allCompanies, {
        keys: ['company_name', 'company_geo'],
        includeScore: true,
      }),
    [allCompanies]
  );
  const [search, setSearch] = useState('');
  const onOpen = () => {
    setLiveSelectedCompanies(selectedCompanies || []);
    setOpen(true);
  };
  const onClose = () => {
    setSelectedCompanies(
      liveSelectedCompanies?.length ? liveSelectedCompanies : undefined
    );
    setOpen(false);
  };

  const onSelectAll = (ciks: string[], select: boolean) => {
    setLiveSelectedCompanies(
      select
        ? uniq([...liveSelectedCompanies, ...ciks])
        : difference(liveSelectedCompanies, ciks)
    );
  };
  const onSelect = (cik: string, select: boolean) => {
    onSelectAll([cik], select);
  };
  const onRemove = (cik: string) => {
    const filtered = filter(
      selectedCompanies || [],
      (company) => cik !== company
    );
    setSelectedCompanies(filtered.length ? filtered : undefined);
  };

  const companies = useMemo(() => {
    if (!search) {
      return allCompanies;
    }
    return map(fuse.search(search), (x) => x.item);
  }, [allCompanies, search, fuse]);
  return (
    <>
      <Flex pb={1}>
        <Text
          fontSize="1.2rem"
          height="100%"
          as="span"
          suppressHydrationWarning
        >
          Companies{' '}
          {companyCount !== undefined ? (
            `(${companyCount.toLocaleString()})`
          ) : (
            <Skeleton as="span">999</Skeleton>
          )}
        </Text>
        <Spacer />
        <Tooltip label="Filter companies by name">
          <IconButton
            mt={1}
            onClick={onOpen}
            variant="outline"
            size="xs"
            aria-label="Search company"
            icon={<MdFilterList />}
          />
        </Tooltip>
      </Flex>
      <Flex pb={1} direction="column">
        {flatMap(
          take(
            selectedCompanies || [],
            (selectedCompanies?.length || 0) > MAX_COMPANIES_TO_SHOW + 1
              ? MAX_COMPANIES_TO_SHOW
              : MAX_COMPANIES_TO_SHOW + 1
          ),
          (cik) => {
            const company = companyByCik[cik];
            if (!company) {
              return null;
            }
            return (
              <Flex direction="row" key={cik}>
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => onRemove(cik)}
                  size="xs"
                  mb={1}
                >
                  <FaMinus />
                </Button>
                <Text fontSize="1rem" as="span" suppressHydrationWarning pl={1}>
                  {company.company_name}
                </Text>
              </Flex>
            );
          }
        )}
        {(selectedCompanies?.length || 0) > MAX_COMPANIES_TO_SHOW + 1 && (
          <Button variant="outline" onClick={onOpen} size="xs" mt={1} mb={1}>
            + {(selectedCompanies?.length || 0) - (MAX_COMPANIES_TO_SHOW + 1)}{' '}
            more companies
          </Button>
        )}
      </Flex>
      <Modal isOpen={open} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent width="95vw" maxWidth="900px">
          <ModalHeader>
            <Text as="span" mr={3}>
              Filter by company
              {liveSelectedCompanies.length
                ? ` (${liveSelectedCompanies.length} selected)`
                : ''}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup mb={2}>
              <InputLeftElement>
                <MdSearch fontSize="1.5rem" />
              </InputLeftElement>
              <Input
                type="text"
                autoFocus
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                placeholder="Search by company"
                aria-label="Search by company"
                _placeholder={{ color: mode('gray.600', 'gray.200') }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </InputGroup>
            <CompanyTable
              companies={companies}
              isLoading={loading || companiesLoading}
              toggleSelection={onSelect}
              selectedCompanies={liveSelectedCompanies}
              selectAll={onSelectAll}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

type FilterProps = BoxProps & {
  companyCount?: number;
  minDate: Date;
  maxDate: Date;
  setMinDate: (date: Date) => void;
  setMaxDate: (date: Date) => void;
  isLoading: boolean;
  selectedContractType: string | undefined;
  setSelectedContractType: (ct: string | undefined) => void;
  selectedCompanies: string[] | undefined;
  setSelectedCompanies: (sc: string[] | undefined) => void;
  searchCompanies: string[] | undefined;
  searchContractTypes: string[] | undefined;
};

export const ContractFilters: FC<FilterProps> = ({
  companyCount,
  minDate,
  setMinDate,
  maxDate,
  setMaxDate,
  isLoading,
  selectedContractType,
  setSelectedContractType,
  selectedCompanies,
  setSelectedCompanies,
  searchCompanies,
  searchContractTypes,
  ...props
}) => {
  const { data: contractTypeData } = useGetContractTypesQuery();

  const contractTypes = useMemo(() => {
    const contractTypeSet = new Set(searchContractTypes || []);
    return filter(
      contractTypeData?.sec_filing_attachment || [],
      (ct) => !!ct.contract_type && contractTypeSet.has(ct.contract_type)
    );
  }, [contractTypeData, searchContractTypes]);

  // const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Box {...props}>
      <Stack spacing={5}>
        <Box>
          <FormControl>
            <FormLabel>
              <CompanyFilterModal
                selectedCompanies={selectedCompanies}
                setSelectedCompanies={setSelectedCompanies}
                searchCompanies={searchCompanies}
                companyCount={companyCount}
              />
            </FormLabel>
            {/* <CheckboxGroup>
              <Checkbox>yeah ok</Checkbox>
            </CheckboxGroup>
            <FormHelperText>More...</FormHelperText> */}
          </FormControl>
        </Box>
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

        <Box pr={[0, 0, 3]}>
          <FormControl>
            <FormLabel>
              <Flex pb={1}>
                <Text
                  fontSize="1.2rem"
                  height="100%"
                  as="span"
                  suppressHydrationWarning
                >
                  Contract Type
                </Text>
              </Flex>
            </FormLabel>
            <Select
              placeholder="All"
              maxWidth={['100%', '100%', '250px']}
              fontSize="sm"
              value={selectedContractType}
              onChange={(e) =>
                setSelectedContractType(e.target.value || undefined)
              }
              style={{ textTransform: 'capitalize' }}
            >
              {contractTypes.map(({ contract_type }) => (
                <option value={contract_type || undefined} key={contract_type}>
                  {contract_type?.toLowerCase()}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
