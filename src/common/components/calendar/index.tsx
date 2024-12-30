import { Dispatch, SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';
import DateCol from './DateCol';
import Month from './Month';

export type PickerType = 'date' | 'month' | 'year' | '';
export interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
  setPickerType: Dispatch<SetStateAction<PickerType>>;
}

export default function DatePicker({ selectedDate, setSelectedDate }: Exclude<DatePickerProps, 'setPickerType'>) {
  const ref = useRef(null);
  const [pickerType, setPickerType] = useState<PickerType>('date');

  const renderPickerByType = (type: PickerType) => {
    switch (type) {
      case 'date':
        return <DateCol selectedDate={selectedDate} setSelectedDate={setSelectedDate} setPickerType={setPickerType} />;
      case 'month':
        return <Month selectedDate={selectedDate} setSelectedDate={setSelectedDate} setPickerType={setPickerType} />;
      default:
        return;
    }
  };
  return <Container ref={ref}>{renderPickerByType(pickerType)}</Container>;
}

const Container = styled.div`
  position: relative;
  background-color: white;
`;
