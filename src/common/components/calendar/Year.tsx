import styled from 'styled-components';
import { DatePickerProps } from '.';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
import { Container, Header, Img, Title } from './CommonStyle';

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
          <Img src={CaretLeftIcon} />
        </button>
        <Title>{`${visibleYears[0]} - ${visibleYears[visibleYears.length - 1]}`}</Title>
        <button type="button" onClick={onNextYears} disabled={visibleYears[visibleYears.length - 1] === endYear}>
          <Img src={CaretRightIcon} />
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

const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const YearButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<{ isSelected: boolean }>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  ${({ theme }) => theme.typography.body1.regular}
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.orange200 : 'transparent')};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : theme.themeColors.textPrimary)};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange200};
    color: ${({ theme }) => theme.themeColors.textPrimary};
  }
`;
