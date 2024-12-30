import { format, subYears, addYears, isSameMonth } from 'date-fns';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
import CaretDownIcon from '@/common/assets/icon/icon-arrow-down.svg';
import styled from 'styled-components';
import { DatePickerProps } from '.';
import { Container, Header, Img, Title } from './CommonStyle';
import { useCalendarStore } from '@/common/stores/useCalendarStore';
import { useEffect } from 'react';
import useCalender from '../../hooks/useCalender/useCalender';

export default function Month({ setPickerType }: DatePickerProps) {
  const { startDate, endDate, setStartDate, setEndDate } = useCalendarStore();
  const { allMonth } = useCalender(startDate || endDate || new Date(), startDate || endDate || new Date());
  const onNextYear = () => {
    if (new Date().getFullYear() === (startDate || endDate || new Date()).getFullYear()) return;
    setStartDate(addYears(startDate || new Date(), 1));
  };

  const onPrevYear = () => {
    if (1970 === (startDate || endDate || new Date()).getFullYear()) return;
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
            <Title>{format(startDate || endDate || new Date(), 'MMM yyyy')}</Title>
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
            isSelected={isSameMonth(startDate || endDate || new Date(), month)}
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
