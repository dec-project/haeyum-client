import { format, addMonths, subMonths, isWithinInterval, differenceInDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { DatePickerProps } from '.';
import { Container } from './CommonStyle';
import DatePicker from './DatePicker';
import DateButton from './DateButton';
import useCalendar from '../../hooks/useCalendar/useCalendar';

export default function DateCol({ setPickerType, startDate, setStartDate, endDate, setEndDate }: DatePickerProps) {
  const [startMonth, setStartMonth] = useState(startDate || endDate || new Date());
  const [endMonth, setEndMonth] = useState(addMonths(startMonth, 1));
  const { startMonthDates, endMonthDates, weekDays } = useCalendar(startMonth, endMonth);

  const nextMonths = () => {
    setStartMonth(addMonths(startMonth, 1));
    setEndMonth(addMonths(endMonth, 1));
  };

  const prevMonths = () => {
    setStartMonth(subMonths(startMonth, 1));
    setEndMonth(subMonths(endMonth, 1));
  };

  const onChangeDate = (date: Date) => {
    if (startDate && endDate) {
      setStartDate(null);
      setEndDate(null);
    }
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      setEndDate(date);
    }
  };

  const isDateDisabled = (date: Date) => {
    const minDate = new Date(1970, 0, 1);
    const maxDate = new Date();
    return date < minDate || date > maxDate;
  };

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return isWithinInterval(date, { start: startDate, end: endDate });
  };

  useEffect(() => {
    if (startDate && endDate) {
      if (startDate > endDate) {
        setStartDate(null);
        setEndDate(null);
      }
    }
    if (startDate && endDate && Math.abs(differenceInDays(startDate, endDate)) > 90) {
      setStartDate(null);
      setEndDate(null);
      alert('90일 이상 선택할 수 없습니다.');
    }
  }, [startDate, endDate]);

  return (
    <Container>
      <DatePicker
        title={format(startMonth, 'MMM yyyy')}
        dates={startMonthDates}
        weekDays={weekDays}
        currentMonth={startMonth}
        onChangeDate={onChangeDate}
        isDateDisabled={isDateDisabled}
        isInRange={isInRange}
        startDate={startDate}
        endDate={endDate}
        setPickerType={setPickerType}
      />

      <DatePicker
        title={format(endMonth, 'MMM yyyy')}
        dates={endMonthDates}
        weekDays={weekDays}
        currentMonth={endMonth}
        onChangeDate={onChangeDate}
        isDateDisabled={isDateDisabled}
        isInRange={isInRange}
        startDate={startDate}
        endDate={endDate}
        setPickerType={setPickerType}
      />
      <DateButton prevMonths={prevMonths} nextMonths={nextMonths} />
    </Container>
  );
}
