export const getDecadeNumber = (calendarDate: string) => {
  const year = parseInt(calendarDate.split('-')[0], 10);
  const decadeNumber = `${year - (year % 10)}`;
  return decadeNumber;
};
