import { BackgroundProps, ButtonProps, InputProps } from '@chakra-ui/react';
import { DateObj } from 'dayzed';

export type OnDateSelected = (
  selectedDate: DateObj,
  event: React.SyntheticEvent<Element, Event>
) => void;

export interface DayOfMonthBtnStyleProps extends ButtonProps {
  selectedBg?: BackgroundProps['bg'];
  disabledBg?: BackgroundProps['bg'];
}

export interface PropsConfigs {
  dateNavBtnProps?: ButtonProps;
  dayOfMonthBtnProps?: DayOfMonthBtnStyleProps;
  inputProps?: InputProps;
}

export interface DatepickerProps {
  propsConfigs?: PropsConfigs;
}

export interface DatepickerConfigs {
  dateFormat: string;
  monthNames: string[];
  dayNames: string[];
}
