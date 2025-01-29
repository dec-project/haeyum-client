import { Dispatch, SetStateAction } from 'react';
import CalendarLayout from './CalendarLayout';
import DateDisplay from './DateDisplay';

export type PickerType = 'date' | 'month' | 'year';
export interface DatePickerProps {
  setPickerType: Dispatch<SetStateAction<PickerType>>;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}

export default function Calendar({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Omit<DatePickerProps, 'setPickerType'>) {
  return (
    <>
      <DateDisplay startDate={startDate} endDate={endDate} />
      <CalendarLayout startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
    </>
  );
}
