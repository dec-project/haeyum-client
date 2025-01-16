export const formattedDate = (date: string) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();

  return `${year}년 ${month}월 ${day}일`;
};
