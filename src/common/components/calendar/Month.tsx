import { format, subYears, addYears, isSameMonth } from 'date-fns';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
import CaretDownIcon from '@/common/assets/icon/icon-arrow-down.svg';
import styled from 'styled-components';
import useCalender from '@/common/hooks/useCalender/useCalender';
import { DatePickerProps } from '.';
import { Container, Header, Img, Title } from './CommonStyle';

export default function Month({ setPickerType, selectedDate, setSelectedDate }: DatePickerProps) {
  const { allMonth } = useCalender(selectedDate);
  const onNextYear = () => {
    setSelectedDate(addYears(selectedDate, 1));
  };

  const onPrevYear = () => {
    setSelectedDate(subYears(selectedDate, 1));
  };

  const onChangeMonth = (month: Date) => {
    setSelectedDate(month);
  };

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
            <Title>{format(selectedDate, 'MMM yyyy')}</Title>
          </button>
          <button
            type="button"
            onClick={() => {
              setPickerType('date');
            }}
          >
            <Img height={13} src={CaretDownIcon} alt="" />
          </button>
        </YearDisplay>
        <ButtonGroup>
          <button type="button" onClick={onPrevYear}>
            <Img src={CaretLeftIcon} alt="" />
          </button>
          <button type="button" onClick={onNextYear}>
            <Img src={CaretRightIcon} alt="" />
          </button>
        </ButtonGroup>
      </Header>
      <MonthGrid>
        {allMonth.map((month, index) => (
          <MonthButton
            type="button"
            key={index}
            isSelected={isSameMonth(selectedDate, month)}
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

const MonthButton = styled.button<{ isSelected: boolean }>`
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
