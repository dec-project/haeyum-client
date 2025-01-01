/* eslint-disable no-unused-vars */
import { isSameDay, isSameMonth } from 'date-fns';
import styled from 'styled-components';
import { PickerType } from '.';
import { Title } from './CommonStyle';

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
    <CalendarWrapper>
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
          <div key={index}>{day}</div>
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
              {date.getDate()}
            </DateButton>
          );
        })}
      </DatesGrid>
    </CalendarWrapper>
  );
}

const Navigation = styled.div`
  display: flex;
  gap: 4rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 0.5rem;
  border-radius: ${({ isSelectedDay }) => (isSelectedDay ? '9999px' : '0')};
  border: none;
  background-color: ${({ isSelectedDay, isInRange, theme }) =>
    isSelectedDay ? theme.themeColors.secondary : isInRange ? theme.colors.orange200 : 'transparent'};
  color: ${({ isCurrentMonth, disabled, theme }) =>
    disabled ? '#d1d5db' : isCurrentMonth ? theme.themeColors.textPrimary : '#d1d5db'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
