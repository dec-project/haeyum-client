import { renderHook } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';
import useCalender from './useCalendar';
import { format, addDays, startOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, endOfWeek } from 'date-fns';

describe('useCalender Hook', () => {
  it('요일 포맷 테스트', () => {
    const { result } = renderHook(() => useCalender(new Date(), new Date()));

    const weekStartDate = startOfWeek(new Date());
    const expectedWeekDays = [];
    for (let day = 0; day < 7; day += 1) {
      expectedWeekDays.push(format(addDays(weekStartDate, day), 'EEEEE'));
    }

    expect(result.current.weekDays).toEqual(expectedWeekDays);
  });

  it('12개월이 정상적으로 반환되는지 테스트', () => {
    const selectedDate = new Date('2024-01-01');
    const { result } = renderHook(() => useCalender(selectedDate, selectedDate));

    expect(result.current.allMonth.length).toBe(12);
    expect(result.current.allMonth[0].getMonth()).toBe(0);
    expect(result.current.allMonth[11].getMonth()).toBe(11);
  });

  it('시작 월의 날짜가 정상적으로 반환되는지 테스트', () => {
    const startDate = new Date('2024-01-01');
    const { result } = renderHook(() => useCalender(startDate, new Date()));

    const expectedDates = eachDayOfInterval({
      start: startOfWeek(startOfMonth(startDate)),
      end: endOfWeek(endOfMonth(startDate)),
    });

    expect(result.current.startMonthDates).toEqual(expectedDates);
  });

  it('끝 월의 날짜가 정상적으로 반환되는지 테스트', () => {
    const endDate = new Date('2024-02-01');
    const { result } = renderHook(() => useCalender(new Date(), endDate));

    const expectedDates = eachDayOfInterval({
      start: startOfWeek(startOfMonth(endDate)),
      end: endOfWeek(endOfMonth(endDate)),
    });

    expect(result.current.endMonthDates).toEqual(expectedDates);
  });
});
