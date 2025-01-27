import { format, subYears, addYears, isSameMonth } from 'date-fns';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
import CaretDownIcon from '@/common/assets/icon/icon-arrow-down.svg';
import styled from 'styled-components';
import { DatePickerProps } from '.';
import { Container, Header, Img, Title } from './CommonStyle';
import { useEffect } from 'react';
import useCalendar from '../../hooks/useCalendar/useCalendar';

export default function Month({ setPickerType, startDate, endDate, setStartDate, setEndDate }: DatePickerProps) {
  const curDate = startDate || endDate || new Date();
  const { allMonth } = useCalendar(curDate, curDate);
  const onNextYear = () => {
    if (new Date().getFullYear() === curDate.getFullYear()) return;
    setStartDate(addYears(startDate || new Date(), 1));
  };

  const onPrevYear = () => {
    if (1970 === curDate.getFullYear()) return;
    setStartDate(subYears(startDate || new Date(), 1));
  };

  const onChangeMonth = (month: Date) => {
    setStartDate(month || new Date());
  };

  useEffect(() => {
    setEndDate(null);
  }, []);

  return (
    <Container>
      <Header>
        <YearDisplay>
          <button
            type="button"
            onClick={() => {
              setPickerType('year');
            }}
          >
            <Title>{format(curDate, 'MMM yyyy')}</Title>
          </button>
          <button
            type="button"
            onClick={() => {
              setPickerType('date');
            }}
          >
            <Img src={CaretDownIcon} />
          </button>
        </YearDisplay>
        <ButtonGroup>
          <button type="button" onClick={onPrevYear}>
            <Img src={CaretLeftIcon} />
          </button>
          <button type="button" onClick={onNextYear}>
            <Img src={CaretRightIcon} />
          </button>
        </ButtonGroup>
      </Header>
      <MonthGrid>
        {allMonth.map((month: Date, index: number) => (
          <MonthButton
            type="button"
            key={index}
            isSelected={isSameMonth(curDate, month)}
            onClick={() => onChangeMonth(month)}
          >
            {format(month, 'MMM')}
          </MonthButton>
        ))}
      </MonthGrid>
    </Container>
  );
}

const YearDisplay = styled.span`
  display: flex;
`;

const ButtonGroup = styled.div`
  button {
    width: 1.7rem;
    height: 1rem;
    background: none;
    border: none;
  }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MonthButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<{ isSelected: boolean }>`
  border-radius: 9999px;
  border: none;
  padding: 0.875rem;
  ${({ theme }) => theme.typography.label.medium}
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.themeColors.secondary : 'transparent')};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : theme.themeColors.textPrimary)};

  &:hover {
    background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.orange400 : theme.colors.orange200)};
    color: ${({ isSelected, theme }) => (isSelected ? theme.themeColors.textPrimary : theme.colors.white)};
  }
`;
