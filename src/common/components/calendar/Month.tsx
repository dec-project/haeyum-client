import { format, subYears, addYears, isSameMonth } from 'date-fns';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
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
          <SubmitButton
            type="button"
            onClick={() => {
              setPickerType('date');
            }}
          >
            <span>확인</span>
          </SubmitButton>
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
            <span>{format(month, 'MMM')}</span>
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
    width: 24px;
    height: 24px;
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
  border-radius: 24px;
  border: none;
  padding: 16px;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.themeColors.secondary : 'transparent')};

  &:hover {
    background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.orange400 : theme.colors.orange200)};
    color: ${({ isSelected, theme }) => (isSelected ? theme.themeColors.textPrimary : theme.colors.white)};
    cursor: pointer;
  }

  & > span {
    ${({ theme }) => theme.typography.label.medium}
    color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : theme.themeColors.textPrimary)};
  }
`;

const SubmitButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 5px 12px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.themeColors.secondary};
  & > span {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.typography.label.medium}
  }
`;
