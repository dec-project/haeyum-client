import { useRef, useState } from 'react';
import styled from 'styled-components';
import DateCol from './DateCol';
import Month from './Month';
import { DatePickerProps, PickerType } from '.';

export default function CalendarLayout({ selectedDate, setSelectedDate }: Exclude<DatePickerProps, 'setPickerType'>) {
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
`;
