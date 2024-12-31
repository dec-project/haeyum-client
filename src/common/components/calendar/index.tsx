import { Dispatch, SetStateAction } from 'react';
import CalendarLayout from './CalendarLayout';
import DateDisplay from './DateDisplay';

export type PickerType = 'date' | 'month' | 'year';
export interface DatePickerProps {
  setPickerType: Dispatch<SetStateAction<PickerType>>;
}

export default function Calendar() {
  return (
    <div>
      <DateDisplay />
      <CalendarLayout />
    </div>
  );
}
