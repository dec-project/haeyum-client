import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '@/common/components/calendar';
import { format } from 'date-fns';
import styled from 'styled-components';
import AppBar from '@/common/components/appbar';

const Search = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert('날짜를 선택해주세요.');
      return;
    }
    if (startDate && endDate) {
      navigate(`/search?startDate=${format(startDate, 'yyyy-MM-dd')}&endDate=${format(endDate, 'yyyy-MM-dd')}`, {
        replace: true,
      });
    }
  };

  return (
    <Wrapper>
      <AppBar text="검색" />
      <Container>
        <Calendar startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />
        <ButtonBox>
          <Button onClick={handleSearch} disabled={!startDate || !endDate}>
            <span>GO</span>
          </Button>
        </ButtonBox>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

const Container = styled.div`
  padding-top: 72px;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  & > button {
    margin: 0 16px;
  }
`;

const ButtonBox = styled.div`
  padding: 12px 16px;
`;

const Button = styled.button`
  width: 84px;
  height: 40px;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray : theme.themeColors.secondary)};
  span {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.white : theme.themeColors.textPrimary)};
    ${({ theme }) => theme.typography.body1.bold};
  }
`;

export default Search;
