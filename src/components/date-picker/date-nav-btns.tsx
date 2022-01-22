import { Button, ButtonProps } from '@chakra-ui/react';
import { Calendar, GetBackForwardPropsOptions } from 'dayzed';
import { DatepickerProps } from './types';

export interface DatepickerBackBtnsProps extends DatepickerProps {
  calendars: Calendar[];
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, unknown>;
}

const DefaultBtnStyle: ButtonProps = {
  variant: 'ghost',
  size: 'sm',
};

export const DatepickerBackBtns: React.FC<DatepickerBackBtnsProps> = ({
  calendars,
  getBackProps,
  propsConfigs,
}) => {
  const customBtnProps = propsConfigs?.dateNavBtnProps;
  return (
    <>
      <Button
        {...getBackProps({
          calendars,
          offset: 12,
        })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'<<'}
      </Button>
      <Button
        {...getBackProps({ calendars })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'<'}
      </Button>
    </>
  );
};

export interface DatepickerForwardBtnsProps extends DatepickerProps {
  calendars: Calendar[];
  getForwardProps: (
    data: GetBackForwardPropsOptions
  ) => Record<string, unknown>;
}

export const DatepickerForwardBtns: React.FC<DatepickerForwardBtnsProps> = ({
  calendars,
  getForwardProps,
  propsConfigs,
}) => {
  const customBtnProps = propsConfigs?.dateNavBtnProps;
  return (
    <>
      <Button
        {...getForwardProps({ calendars })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'>'}
      </Button>
      <Button
        {...getForwardProps({
          calendars,
          offset: 12,
        })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'>>'}
      </Button>
    </>
  );
};
