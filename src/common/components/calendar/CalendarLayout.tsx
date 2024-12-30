import { useRef, useState } from 'react';
import styled from 'styled-components';
import DateCol from './DateCol';
import Month from './Month';
import { DatePickerProps, PickerType } from '.';
import Year from './Year';

export default function CalendarLayout() {
  const ref = useRef(null);
  const [pickerType, setPickerType] = useState<PickerType>('date');

  const renderPickerByType = (type: PickerType) => {
    switch (type) {
      case 'date':
        return <DateCol setPickerType={setPickerType} />;
      case 'month':
        return <Month setPickerType={setPickerType} />;
      case 'year':
        return <Year setPickerType={setPickerType} />;
      default:
        return;
    }
  };
  return <Container ref={ref}>{renderPickerByType(pickerType)}</Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
`;
