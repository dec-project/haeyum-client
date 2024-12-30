import { useRef } from 'react';
import styled from 'styled-components';
import DateCol, { DatePickerProps } from './DateCol';

export default function DatePicker({ selectedDate, setSelectedDate }: Omit<DatePickerProps, 'setPickerType'>) {
  const ref = useRef(null);

  return (
    <Container ref={ref}>
      <DateCol selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: white;
`;
