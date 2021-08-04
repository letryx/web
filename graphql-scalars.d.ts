/* eslint-disable @typescript-eslint/naming-convention */
import type { LocalDate } from 'js-joda';

declare global {
  type GraphQL_Date = LocalDate;
}
