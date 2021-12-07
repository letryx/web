// Adapted from https://github.com/letryx/chakra-dayzed-datepicker to allow for date typing
import React, { useEffect, useRef, useState } from 'react';
import {
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useOutsideClick,
} from '@chakra-ui/react';
import { useDayzed } from 'dayzed';
import { format, parse } from 'date-fns';
import { CalendarPanel } from './calendar-panel';
import {
  DatepickerConfigs,
  DatepickerProps,
  OnDateSelected,
} from './types';

export const Month_Names_Full = [
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

export const Month_Names_Short = [
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

export const Weekday_Names_Short = [
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
  monthNames: Month_Names_Short,
  dayNames: Weekday_Names_Short,
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
    ref: ref,
    handler: () => setPopoverOpen(false),
  });

  const [typedValue, setTypedValue] = useState(
    format(date, configs.dateFormat)
  );

  // dayzed utils
  const handleOnDateSelected: OnDateSelected = ({ selectable, date }) => {
    if (!selectable) return;
    if (date instanceof Date && !isNaN(date.getTime())) {
      onDateChange(date);
      setTypedValue(format(date, configs.dateFormat));
      setPopoverOpen(false);
      return;
    }
  };
  const onBlur = () => {
    if (typedValue !== format(date, configs.dateFormat)) {
      const parsedDate = parse(typedValue, configs.dateFormat, date);
      if (parsedDate instanceof Date && !isNaN(parsedDate.getTime()) && parsedDate.getTime() !== date.getTime()) {
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
