// Adapted from https://github.com/letryx/chakra-dayzed-datepicker to allow for date typing
import {
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useOutsideClick,
} from '@chakra-ui/react';
import { format, parse } from 'date-fns';
import { useDayzed } from 'dayzed';
import { useRef, useState } from 'react';
import { CalendarPanel } from './calendar-panel';
import { DatepickerConfigs, DatepickerProps, OnDateSelected } from './types';

export const MonthNamesFull = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MonthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const WeekdayNamesShort = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export interface SingleDatepickerProps extends DatepickerProps {
  date: Date;
  configs?: DatepickerConfigs;
  disabled?: boolean;
  onDateChange: (date: Date) => void;
  id?: string;
  name?: string;
}

const DefaultConfigs = {
  dateFormat: 'yyyy-MM-dd',
  monthNames: MonthNamesShort,
  dayNames: WeekdayNamesShort,
};

export const SingleDatepicker: React.FC<SingleDatepickerProps> = ({
  configs = DefaultConfigs,
  propsConfigs,
  ...props
}) => {
  const { date, name, disabled, onDateChange, id } = props;

  // chakra popover utils
  const ref = useRef<HTMLElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  const [popoverOpen, setPopoverOpen] = useState(false);

  useOutsideClick({
    ref,
    handler: () => setPopoverOpen(false),
  });

  const [typedValue, setTypedValue] = useState(
    format(date, configs.dateFormat)
  );

  // dayzed utils
  const handleOnDateSelected: OnDateSelected = ({
    selectable,
    date: _date,
  }) => {
    if (!selectable) return;
    if (_date instanceof Date && !Number.isNaN(_date.getTime())) {
      onDateChange(_date);
      setTypedValue(format(_date, configs.dateFormat));
      setPopoverOpen(false);
    }
  };
  const onBlur = () => {
    if (typedValue !== format(date, configs.dateFormat)) {
      const parsedDate = parse(typedValue, configs.dateFormat, date);
      if (
        parsedDate instanceof Date &&
        !Number.isNaN(parsedDate.getTime()) &&
        parsedDate.getTime() !== date.getTime()
      ) {
        onDateChange(parsedDate);
        setTypedValue(format(parsedDate, configs.dateFormat));
        setPopoverOpen(false);
        return;
      }
      // Bad, so go back to what was there before.
      setTypedValue(format(date, configs.dateFormat));
    }
  };

  const dayzedData = useDayzed({
    showOutsideDays: true,
    onDateSelected: handleOnDateSelected,
    date,
    selected: date,
  });

  return (
    <Popover
      placement="bottom-start"
      variant="responsive"
      isOpen={popoverOpen}
      onClose={() => setPopoverOpen(false)}
      initialFocusRef={initialFocusRef}
      isLazy
    >
      <PopoverTrigger>
        <Input
          id={id}
          autoComplete="off"
          isDisabled={disabled}
          ref={initialFocusRef}
          onClick={() => setPopoverOpen(!popoverOpen)}
          name={name}
          value={typedValue}
          onChange={(e) => setTypedValue(e.target.value)}
          onBlur={(e) => {
            onBlur();
            e.preventDefault();
          }}
          {...propsConfigs?.inputProps}
        />
      </PopoverTrigger>
      <PopoverContent ref={ref} width="100%">
        <PopoverBody>
          <CalendarPanel
            renderProps={dayzedData}
            configs={configs}
            propsConfigs={propsConfigs}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
