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
  isEnd: boolean;
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
          const isSelectedDay =
            (startDate ? isSameDay(startDate, date) : false) || (endDate ? isSameDay(endDate, date) : false);
          const isEnd = endDate ? isSameDay(endDate, date) : false;

          return (
            <DateButton
              key={index}
              onClick={() => !disabled && onChangeDate(date)}
              isCurrentMonth={isSameMonth(currentMonth, date)}
              isSelectedDay={isSelectedDay}
              isInRange={isInRange(date)}
              disabled={disabled}
              isEnd={isEnd}
            >
              <div>
                <span>{date.getDate()}</span>
              </div>
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
  width: 100%;
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 24px;
  place-items: center;
  width: 100%;
`;

const DateButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isCurrentMonth', 'isSelectedDay', 'isInRange', 'isEnd', 'disabled'].includes(prop),
})<DateButtonProps>`
  width: 100%;
  height: 48px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelectedDay, isInRange, theme }) =>
    !isSelectedDay && isInRange ? theme.colors.orange200 : 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-image: ${({ isInRange, isSelectedDay, isEnd, theme }) =>
    isInRange &&
    isSelectedDay &&
    `linear-gradient(${isEnd ? '270deg' : '90deg'}, transparent 50%, ${theme.colors.orange200} 0)`};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: ${({ isSelectedDay }) => (isSelectedDay ? '24px' : '0')};
    background-color: ${({ isSelectedDay, theme }) => (isSelectedDay ? theme.themeColors.secondary : 'transparent')};
    color: ${({ isCurrentMonth, disabled, theme }) =>
      disabled ? theme.colors.gray : isCurrentMonth ? theme.themeColors.textPrimary : theme.colors.gray};
    & > span {
      ${({ theme }) => theme.typography.body2.regular};
    }
  }
`;

const Title = styled.span`
  ${({ theme }) => theme.typography.body1.bold};
  text-align: center;
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
`;
