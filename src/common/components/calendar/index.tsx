import { Dispatch, SetStateAction } from 'react';
import { useCalendarStore } from '@/common/stores/useCalendarStore';
import CalendarLayout from './CalendarLayout';
import DateDisplay from './DateDisplay';

export type PickerType = 'date' | 'month' | 'year' | '';
export interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  setPickerType: Dispatch<SetStateAction<PickerType>>;
}

export default function Calendar() {
  const { startDate, endDate, setStartDate, setEndDate } = useCalendarStore();
  return (
    <div>
      <DateDisplay />
      <CalendarLayout selectedDate={startDate || new Date()} setSelectedDate={setStartDate} setPickerType={() => {}} />
      <CalendarLayout selectedDate={endDate || new Date()} setSelectedDate={setEndDate} setPickerType={() => {}} />
    </div>
  );
}
