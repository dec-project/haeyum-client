/* eslint-disable no-unused-vars */
import { isSameDay, isSameMonth } from 'date-fns';
import styled from 'styled-components';
import { PickerType } from '.';

interface DatePickerProps {
  title: string;
  dates: Date[];
  weekDays: string[];
  currentMonth: Date;
  onChangeDate: (date: Date) => void;
  isDateDisabled: (date: Date) => boolean;
  isInRange: (date: Date) => boolean;
  startDate: Date | null;
  endDate: Date | null;
  setPickerType: (type: PickerType) => void;
}

interface DateButtonProps {
  isCurrentMonth: boolean;
  isSelectedDay: boolean;
  isInRange: boolean;
  disabled: boolean;
}

export default function DatePicker({
  title,
  dates,
  weekDays,
  currentMonth,
  onChangeDate,
  isDateDisabled,
  isInRange,
  startDate,
  endDate,
  setPickerType,
}: DatePickerProps) {
  return (
    <Wrapper>
      <Navigation>
        <button
          onClick={() => {
            setPickerType('month');
          }}
        >
          <Title>{title}</Title>
        </button>
      </Navigation>
      <WeekdaysGrid>
        {weekDays.map((day, index) => (
          <Text key={index}>{day}</Text>
        ))}
      </WeekdaysGrid>
      <DatesGrid>
        {dates.map((date, index) => {
          const disabled = !isSameMonth(currentMonth, date) || isDateDisabled(date);
          return (
            <DateButton
              key={index}
              onClick={() => !disabled && onChangeDate(date)}
              isCurrentMonth={isSameMonth(currentMonth, date)}
              isSelectedDay={
                (startDate ? isSameDay(startDate, date) : false) || (endDate ? isSameDay(endDate, date) : false)
              }
              isInRange={isInRange(date)}
              disabled={disabled}
            >
              <span>{date.getDate()}</span>
            </DateButton>
          );
        })}
      </DatesGrid>
    </Wrapper>
  );
}

const Navigation = styled.div`
  display: flex;
  height: 48px;
  padding-bottom: 2px;
  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WeekdaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DateButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isCurrentMonth', 'isSelectedDay', 'isInRange', 'disabled'].includes(prop),
})<DateButtonProps>`
  width: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.typography.body2.regular}
  border-radius: ${({ isSelectedDay }) => (isSelectedDay ? '9999px' : '0')};
  border: none;
  background-color: ${({ isSelectedDay, isInRange, theme }) =>
    isSelectedDay ? theme.themeColors.secondary : isInRange ? theme.colors.orange200 : 'transparent'};
  color: ${({ isCurrentMonth, disabled, theme }) =>
    disabled ? theme.colors.gray : isCurrentMonth ? theme.themeColors.textPrimary : theme.colors.gray};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  span {
    background-color: inherit;
    color: inherit;
    ${({ theme }) => theme.typography.body2.regular};
  }
`;

const Title = styled.span`
  ${({ theme }) => theme.typography.body1.bold};
  text-align: center;
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
`;
