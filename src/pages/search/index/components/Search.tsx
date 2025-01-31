import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '@/common/components/calendar';
import { format } from 'date-fns';
import styled from 'styled-components';
import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';
import MetaTag from '@/common/components/MetaTag';

const Search = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearcClick = () => {
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
      <MetaTag
        title="헤윰 - 검색페이지"
        description="지금 날짜를 검색해, 시간 여행 기록을 확인해 보세요."
        keywords="검색페이지, 프로필, 설정, 계정 관리, 헤윰"
      />
      <AppBar text="검색" />
      <Container>
        <Content>
          <Label>기간</Label>
          <Calendar startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />
          <Button onClick={handleSearcClick} disabled={!startDate || !endDate}>
            <span>GO</span>
          </Button>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

const Label = styled.span`
  width: 100%;
  height: 32px;
  ${({ theme }) => theme.typography.body1.medium};
`;

const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: end;
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
