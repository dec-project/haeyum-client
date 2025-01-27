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

const useCalender = (startMonth: Date, endMonth: Date) => {
  const weekDays = [];
  const weekStartDate = startOfWeek(new Date());
  for (let day = 0; day < 7; day += 1) {
    weekDays.push(format(addDays(weekStartDate, day), 'EEEEE'));
  }
  const allMonth = [];
  const baseMonth = startOfYear(startMonth);
  for (let month = 0; month < 12; month += 1) {
    allMonth.push(addMonths(baseMonth, month));
  }
  const generateMonthDates = (month: Date) =>
    eachDayOfInterval({
      start: startOfWeek(startOfMonth(month)),
      end: endOfWeek(endOfMonth(month)),
    });

  const startMonthDates = generateMonthDates(startMonth);
  const endMonthDates = generateMonthDates(endMonth);

  return { weekDays, startMonthDates, endMonthDates, allMonth };
};

export default useCalender;
