import { useRef, useState } from 'react';
import styled from 'styled-components';
import DateCol from './DateCol';
import Month from './Month';
import { DatePickerProps, PickerType } from '.';
import Year from './Year';

export default function CalendarLayout({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Omit<DatePickerProps, 'setPickerType'>) {
  const ref = useRef(null);
  const [pickerType, setPickerType] = useState<PickerType>('date');

  const renderPickerByType = (type: PickerType) => {
    switch (type) {
      case 'date':
        return (
          <DateCol
            setPickerType={setPickerType}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        );
      case 'month':
        return (
          <Month
            setPickerType={setPickerType}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        );
      case 'year':
        return (
          <Year setPickerType={setPickerType} startDate={startDate} endDate={endDate} setStartDate={setStartDate} />
        );
      default:
        return (
          <DateCol
            setPickerType={setPickerType}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        );
    }
  };
  return <Container ref={ref}>{renderPickerByType(pickerType)}</Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
`;
