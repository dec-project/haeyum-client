import styled from 'styled-components';
import { DatePickerProps } from '.';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';

export default function Year({ selectedDate, setSelectedDate, setPickerType }: DatePickerProps) {
  const currentYear = selectedDate.getFullYear();
  const startYear = 1970;
  const endYear = new Date().getFullYear();

  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const visibleYears = years.filter((year) => year >= currentYear - 5 && year <= currentYear + 5);

  const onPrevYears = () => {
    const newYear = Math.max(startYear, selectedDate.getFullYear() - 10);
    setSelectedDate(new Date(selectedDate.setFullYear(newYear)));
  };

  const onNextYears = () => {
    const newYear = Math.min(endYear, selectedDate.getFullYear() + 10);
    setSelectedDate(new Date(selectedDate.setFullYear(newYear)));
  };

  const onSelectYear = (year: number) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(year);
    setSelectedDate(newDate);
    setPickerType('month');
  };

  return (
    <Container>
      <Header>
        <button type="button" onClick={onPrevYears} disabled={visibleYears[0] === startYear}>
          <Img src={CaretLeftIcon} alt="Previous 10 years" />
        </button>
        <span>{`${visibleYears[0]} - ${visibleYears[visibleYears.length - 1]}`}</span>
        <button type="button" onClick={onNextYears} disabled={visibleYears[visibleYears.length - 1] === endYear}>
          <Img src={CaretRightIcon} alt="Next 10 years" />
        </button>
      </Header>
      <YearGrid>
        {visibleYears.map((year) => (
          <YearButton key={year} isSelected={currentYear === year} onClick={() => onSelectYear(year)}>
            {year}
          </YearButton>
        ))}
      </YearGrid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 223px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const YearButton = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${({ isSelected }) => (isSelected ? '#f5ebd9' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#333333')};
  border: none;

  &:hover {
    background-color: #f5ebd9;
    color: #333333;
  }
`;

const Img = styled.img`
  height: 15px;
  margin-top: 5px;
`;
