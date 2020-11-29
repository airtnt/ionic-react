import { format } from 'date-fns';

/** */
export function getTodayDate(): string {
  return format(new Date(), 'yyyy-LL-dd');
}