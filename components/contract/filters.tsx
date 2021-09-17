import {
  Box,
  BoxProps,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  InputGroup,
  InputLeftAddon,
  Skeleton,
  Spacer,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { FC } from 'react';
import { MdFilterList } from 'react-icons/md';

type FilterProps = BoxProps & {
  companyCount?: number;
  minDate: Date;
  maxDate: Date;
  setMinDate: (date: Date) => void;
  setMaxDate: (date: Date) => void;
  isLoading: boolean;
};

export const ContractFilters: FC<FilterProps> = ({
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
