import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  startOfYear,
} from 'date-fns';

const useCalender = (selectedDate: Date) => {
  const weekDays = [];
  const weekStartDate = startOfWeek(new Date());
  for (let day = 0; day < 7; day += 1) {
    weekDays.push(format(addDays(weekStartDate, day), 'EEEEE'));
  }
  const allMonth = [];
  const startMonth = startOfYear(selectedDate);
  for (let month = 0; month < 12; month += 1) {
    allMonth.push(addMonths(startMonth, month));
  }

  const currentMonthAllDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(selectedDate)),
    end: endOfWeek(endOfMonth(selectedDate)),
  });

  return { weekDays, currentMonthAllDates, allMonth };
};

export default useCalender;
