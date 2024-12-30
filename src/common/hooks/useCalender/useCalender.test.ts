import { renderHook } from '@testing-library/react-hooks';
import useCalender from './useCalender';
import { format, addDays, startOfWeek } from 'date-fns';

describe('useCalender Hook', () => {
  it('요일 포맷 테스트', () => {
    const { result } = renderHook(() => useCalender(new Date()));

    const weekStartDate = startOfWeek(new Date());
    const expectedWeekDays = [];
    for (let day = 0; day < 7; day += 1) {
      expectedWeekDays.push(format(addDays(weekStartDate, day), 'EEEEE'));
    }
    console.log(result.current.weekDays);
    expect(result.current.weekDays).toEqual(expectedWeekDays);
  });

  it('12개월이 정상적으로 반환되는지 테스트', () => {
    const selectedDate = new Date('2024-01-01');
    const { result } = renderHook(() => useCalender(selectedDate));

    console.log(result.current.allMonth);
    expect(result.current.allMonth.length).toBe(12);
    expect(result.current.allMonth[0].getMonth()).toBe(0);
    expect(result.current.allMonth[11].getMonth()).toBe(11);
  });

  it('날짜가 전부 정상적으로 반환되는지 테스트', () => {
    const selectedDate = new Date('2024-01-15');
    const { result } = renderHook(() => useCalender(selectedDate));

    console.log(result.current.currentMonthAllDates);
    const { currentMonthAllDates } = result.current;
    expect(currentMonthAllDates[0].getDay()).toBe(0);
    expect(currentMonthAllDates[currentMonthAllDates.length - 1].getDay()).toBe(6);
  });
});
