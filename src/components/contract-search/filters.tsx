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
import { PAGE_SIZE } from 'components/contract-search/table';
import { SingleDatepicker } from 'components/date-picker';
import { Paginator, useFixedPagination } from 'components/paginator';
import Fuse from 'fuse.js';
import {
  CompanyFragment,
  useGetSecContractCompaniesQuery,
} from 'lib/generated/graphql/apollo-schema';
import { FuseHighlight } from 'lib/search/FuseHighlight';
import {
  difference,
  filter,
  flatMap,
  forEach,
  intersection,
  map,
  take,
  uniq,
  partition,
  every,
  find,
} from 'lodash';
import { FC, useEffect, useMemo, useState } from 'react';
import { FaMinus, FaPlus, FaCaretUp, FaCaretDown, FaCheck, FaCaretRight } from 'react-icons/fa';
import { MdFilterList, MdSearch } from 'react-icons/md';
import { ContractTypeHierarchy, ContractTypeNames } from './hooks';

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


type TriState = 'selected' | 'unselected' | 'mixed';

function triStateColor(state: TriState): string {
  switch (state) {
    case 'selected': return 'red';
    case 'unselected': return 'messenger';
    case 'mixed': return 'yellow';
  }
}

function TriStateIcon({ state}: { state: TriState }) {
  switch (state) {
    case 'selected': return <FaCheck />;
    case 'unselected':  return <Box pl={3} />;
    case 'mixed': return <FaMinus />;
  }
}


const TriStateButton = ({
  state,
  onSelect,
}: {
  state: TriState;
  onSelect: (select: boolean) => void;
}) => {
  return (
    <Button
      variant="outline"
      colorScheme={triStateColor(state)}
      onClick={() => onSelect(state !== 'selected')}
      size="xs"
    >
      <TriStateIcon state={state} />
    </Button>
  )
};


interface ContractTypeSearchHits {
  [key: number]: Fuse.FuseResult<{
    id: number;
    name: string;
  }> | undefined;
}

interface ContractTypeRowProps {
  contractType: ContractTypeHierarchy;
  selection: Set<number>;
  toggleSelection: (ids: number[], selected: boolean) => void;
  level?: number;
  hidePlaceholder?: boolean;
  searchHits?: ContractTypeSearchHits;
}

const ContractTypeRow: FC<ContractTypeRowProps> = ({
  contractType: { id, name, children },
  selection,
  toggleSelection,
  level,
  hidePlaceholder,
  searchHits,
}) => {
  const [open, setOpen] = useState(false);
  const searchOpen = useMemo(() => !!children && !!searchHits && !!find(flattenContracts(children), ct => !!searchHits?.[ct.id]), [children, searchHits]);
  const [selectionState, ids] = useMemo((): [TriState, number[]] => {
    if (!children?.length) {
      return [selection.has(id) ? 'selected' : 'unselected', [id]];
    }
    const ids = [
      id,
      ...map(flattenContracts(children), ct => ct.id),
    ];
    const [present, absent] = partition(ids, ctid => selection.has(ctid));
    if (present.length && absent.length) {
      return ['mixed', ids];
    }
    if (present.length) {
      return ['selected', ids];
    }
    return ['unselected', ids];
  }, [selection, id, children]);
  const hideChildPlacehoders = every(children, c => !c.children?.length);
  const hit = searchHits?.[id];
  return (
    <>
      <Tr key={`row-${id}`}>
        <Td>
          <Flex dir='row' ml={(level || 0) * 8}>
            { (children?.length || 0) > 0 ? (
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={() => setOpen(!open)}
                disabled={searchOpen}
                size="xs"
                mr="4"
              >
                {open || searchOpen ? <FaCaretDown /> : <FaCaretUp />}
              </Button>
            ) : (
              (!hidePlaceholder ? <Button
                variant="ghost"
                colorScheme="black"
                disabled
                size="xs"
                mr="4"
              >
                <FaCaretRight />
              </Button> : <Box size="xs" mr="4" />)
            ) }
            <Text fontWeight="semibold" casing={hit ? undefined : 'capitalize'}>
              {hit ? <FuseHighlight hit={hit} attribute="name" /> : name.toLowerCase()}
            </Text>
          </Flex>
        </Td>
        <Td isNumeric>
          <TriStateButton state={selectionState} onSelect={(selected: boolean) => toggleSelection(ids, selected)} />
        </Td>
      </Tr>
      { (open || searchOpen) && (
        map(children, ct => (
          <ContractTypeRow
            key={ct.id}
            contractType={ct}
            selection={selection}
            toggleSelection={toggleSelection}
            level={(level || 0) + 1}
            hidePlaceholder={hideChildPlacehoders}
            searchHits={searchHits}
          />
        ))
      ) }
    </>
  );
};

interface ContractTypeTableProps {
  contractTypes: ContractTypeHierarchy[];
  isLoading: boolean;
  selectedContractTypes: number[] | undefined;
  toggleSelection: (ctid: number, selected: boolean) => void;
  selectAll: (ctid: number[], selected: boolean) => void;
  searchHits?: ContractTypeSearchHits
}

const ContractTypeTable: FC<ContractTypeTableProps> = ({
  contractTypes,
  isLoading,
  selectedContractTypes,
  selectAll,
  searchHits,
}) => {
  const [allOption, setAllOption] = useState(false);
  const flatContractTypes = useMemo(() => flattenContracts(contractTypes), [contractTypes]);

  const onToggleAllClicked = () => {
    selectAll(
      map(flatContractTypes, (c) => c.id),
      allOption
    );
    setAllOption(!allOption);
  };
  const selection = useMemo(
    () => new Set(selectedContractTypes || []),
    [selectedContractTypes]
  );
  useEffect(() => {
    if (
      intersection(
        selectedContractTypes || [],
        map(flatContractTypes, c => c.id)
      ).length === 0
    ) {
      setAllOption(true);
    }
  }, [selectedContractTypes, flatContractTypes, setAllOption]);
  const actionCount = useMemo(() => {
    const ctids = map(flatContractTypes, (c) => c.id);
    const overlap = allOption
      ? difference(ctids, selectedContractTypes || [])
      : intersection(ctids, selectedContractTypes || []);
    return overlap.length;
  }, [selectedContractTypes, flatContractTypes, allOption]);
  return (
    <>
      <Table variant="simple" borderWidth="1px" fontSize="0.9rem" mb={1}>
        <Thead bg={mode('gray.50', 'gray.800')}>
          <Tr>
            <Th>Contract Type</Th>
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
            : contractTypes.map(ct => (
              <ContractTypeRow
                key={ct.id}
                contractType={ct}
                selection={selection}
                toggleSelection={selectAll}
                searchHits={searchHits}
              />
            ))}
        </Tbody>
      </Table>
    </>
  );
};

function filterContracts(
  contractTypeHierarchy: ContractTypeHierarchy[],
  predicate: (id: number) => boolean
): ContractTypeHierarchy[] {
  return flatMap(contractTypeHierarchy, ct => {
    if (predicate(ct.id)) {
      return [ct];
    }
    if (ct.children) {
      const children = filterContracts(ct.children, predicate);
      if (children.length) {
        return [
          {
            ...ct,
            children,
          },
        ];
      }
    }
    return [];
  });
}

function flattenContracts(contractTypeHierarchy: ContractTypeHierarchy[]): { id: number; name: string }[] {
  return flatMap(contractTypeHierarchy, ct => {
    return [
      {
        id: ct.id,
        name: ct.name,
      },
      ...(ct.children ? flattenContracts(ct.children) : []),
    ];
  });
}

const MAX_CONTRACT_TYPES_TO_SHOW = 6;

interface ContractTypeFilterModalProps {
  selectedContractTypes: number[] | undefined;
  setSelectedContractTypes: (ids: number[] | undefined) => void;
  contractTypeHierarchy: ContractTypeHierarchy[];
  contractTypeNames: ContractTypeNames;
  searchContractTypes: number[] | undefined;
  isLoading?: boolean;
}

const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());


const ContractTypeFilterModal: FC<ContractTypeFilterModalProps> = ({
  setSelectedContractTypes,
  selectedContractTypes,
  contractTypeHierarchy,
  searchContractTypes,
  contractTypeNames,
  isLoading,
}) => {
  const [open, setOpen] = useState(false);
  const [liveSelectedContractTypes, setLiveSelectedContractTypes] = useState<number[]>(
    selectedContractTypes || []
  );
  const [allContractTypes, flatContractTypes, loading] = useMemo(() => {
    if (!contractTypeHierarchy || !contractTypeHierarchy.length) {
      return [[], [], true];
    }
    const searchIds = new Set(searchContractTypes);
    const filtered = filterContracts(contractTypeHierarchy, id => searchIds.has(id));
    return [
      filtered,
      flattenContracts(filtered),
      false,
    ];
  }, [searchContractTypes, contractTypeHierarchy]);
  const fuse = useMemo(() => new Fuse(map(flatContractTypes, ct => {
    return {
      ...ct,
      name: capitalize(ct.name),
    };
  }), {
      keys: ['name'],
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
    }),
    [flatContractTypes]
  );
  const [search, setSearch] = useState('');
  const onOpen = () => {
    setLiveSelectedContractTypes(selectedContractTypes || []);
    setOpen(true);
  };
  const onClose = () => {
    setSelectedContractTypes(
      liveSelectedContractTypes?.length ? liveSelectedContractTypes : undefined
    );
    setOpen(false);
  };

  const onSelectAll = (ctids: number[], select: boolean) => {
    setLiveSelectedContractTypes(
      select
        ? uniq([...liveSelectedContractTypes, ...ctids])
        : difference(liveSelectedContractTypes, ctids)
    );
  };
  const onSelect = (ctid: number, select: boolean) => {
    onSelectAll([ctid], select);
  };
  const onRemove = (ctid: number) => {
    onSelectAll([ctid], false);
  };

  const [contractTypes, searchHits] = useMemo(() => {
    if (!search) {
      return [allContractTypes, undefined];
    }
    const searchHits: { [key: number]: Fuse.FuseResult<{ id: number; name: string }> | undefined} = {};
    forEach(fuse.search(search), (x) => {
      if ((x?.score || 0) >= 0.30) {
        return;
      }
      searchHits[x.item.id] = x;
    });
    return [filterContracts(allContractTypes, id => !!searchHits[id]), searchHits];
  }, [allContractTypes, search, fuse]);
  return (
    <>
      <Flex pb={1}>
        <Text
          fontSize="1.2rem"
          height="100%"
          as="span"
          suppressHydrationWarning
        >
          Contract Types
        </Text>
        <Spacer />
        <Tooltip label="Filter contracts by type">
          <IconButton
            mt={1}
            onClick={onOpen}
            variant="outline"
            size="xs"
            aria-label="Search contract types"
            icon={<MdFilterList />}
          />
        </Tooltip>
      </Flex>
      <Flex pb={1} direction="column">
        {flatMap(
          take(
            selectedContractTypes || [],
            (selectedContractTypes?.length || 0) > MAX_CONTRACT_TYPES_TO_SHOW + 1
              ? MAX_CONTRACT_TYPES_TO_SHOW
              : MAX_CONTRACT_TYPES_TO_SHOW + 1
          ),
          (ctid) => {
            const contractName = contractTypeNames[ctid];
            if (!contractName) {
              return null;
            }
            return (
              <Flex direction="row" key={ctid}>
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => onRemove(ctid)}
                  size="xs"
                  mr={2}
                >
                  <FaMinus />
                </Button>
                <Text fontSize="1rem" as="span" casing="capitalize" suppressHydrationWarning pl={1}>
                  {contractName}
                </Text>
              </Flex>
            );
          }
        )}
        {(selectedContractTypes?.length || 0) > MAX_CONTRACT_TYPES_TO_SHOW + 1 && (
          <Button variant="outline" onClick={onOpen} size="xs" mt={1} mb={1}>
            + {(selectedContractTypes?.length || 0) - (MAX_CONTRACT_TYPES_TO_SHOW + 1)}{' '}
            more contract types
          </Button>
        )}
      </Flex>
      <Modal isOpen={open} onClose={onClose} blockScrollOnMount>
        <ModalOverlay />
          <ModalContent width="95vw" maxWidth="900px">
            <ModalHeader>
              <Text as="span" mr={3}>
                Filter by contract type
                {liveSelectedContractTypes.length
                  ? ` (${liveSelectedContractTypes.length} selected)`
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
                  placeholder="Search by contract type"
                  aria-label="Search by contract type"
                  _placeholder={{ color: mode('gray.600', 'gray.200') }}
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </InputGroup>
              <ContractTypeTable
                contractTypes={contractTypes}
                isLoading={isLoading || loading}
                toggleSelection={onSelect}
                selectedContractTypes={liveSelectedContractTypes}
                selectAll={onSelectAll}
                searchHits={searchHits}
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
  selectedContractTypes: number[] | undefined;
  setSelectedContractTypes: (ct: number[] | undefined) => void;
  selectedCompanies: string[] | undefined;
  setSelectedCompanies: (sc: string[] | undefined) => void;
  searchCompanies: string[] | undefined;
  searchContractTypes: number[] | undefined;
  contractTypeHierarchy: ContractTypeHierarchy[];
  contractTypeNames: ContractTypeNames;
};

export const ContractFilters: FC<FilterProps> = ({
  companyCount,
  minDate,
  setMinDate,
  maxDate,
  setMaxDate,
  isLoading,
  selectedContractTypes,
  setSelectedContractTypes,
  selectedCompanies,
  setSelectedCompanies,
  searchCompanies,
  searchContractTypes,
  contractTypeNames,
  contractTypeHierarchy,
  ...props
}) => {
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
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>
              <ContractTypeFilterModal
                selectedContractTypes={selectedContractTypes}
                setSelectedContractTypes={setSelectedContractTypes}
                contractTypeHierarchy={contractTypeHierarchy}
                contractTypeNames={contractTypeNames}
                searchContractTypes={searchContractTypes}
                isLoading={isLoading}
              />
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
