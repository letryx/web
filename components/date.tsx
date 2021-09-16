import { Tooltip } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { FC } from 'react';

interface ShowDateProps {
  date: string | Date;
  kind: 'short' | 'long';
}

export const formatDate = (
  _date: Date | string,
  kind: 'short' | 'long' = 'short'
): string => {
  const date = typeof _date === 'string' ? parseISO(_date) : _date;
  const dateFmt =
    kind === 'short'
      ? // short
        'MM/dd/yyyy'
      : // long
        'MMMM do, y';
  return format(date, dateFmt);
  // return date.toLocaleDateString();
};

export const ShowDate: FC<ShowDateProps> = ({ date, kind }) => (
  <Tooltip label={formatDate(date, 'long')} isDisabled={kind === 'long'}>
    {formatDate(date, kind)}
  </Tooltip>
);
