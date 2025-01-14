import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TripCards from '../components/TripCards';
import useResult from '../hooks/useResult';
import LoadingSpinner from '@/common/components/spinner';
import { SearchParams } from '@/common/apis/search/types';
import SearchInput from '@/common/components/SearchInput';

const Result = ({ startDate, endDate }: SearchParams) => {
  const navigate = useNavigate();

  const { ref, data, hasNextPage, isFetchingNextPage, isError, error, isLoading } = useResult(startDate, endDate);

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>{error?.message || '에러가 발생했습니다. 다시 시도해주세요.'}</div>;
  }

  if (!data || data.items.length === 0) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>찾으시는 데이터가 없습니다. 날짜를 다시 선택해 주세요.</div>;
  }

  return (
    <Container>
      <SearchInput placeholder="어느 시기로 가볼까요" onClick={() => navigate('/search')} />
      <SearchResultSection>
        <TripCards items={data.items} count={data.count} />
        {!isFetchingNextPage && hasNextPage && <LoadingSpinner />}
        <div ref={ref} style={{ height: 1 }} />
      </SearchResultSection>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 72px;
  padding: 0 16px 16px 16px;
`;

// const SearchInput = styled.input`
//   margin: 12px 0;
//   padding: 0 15px;
//   width: 100%;
//   height: 48px;
//   border: 1px solid ${({ theme }) => theme.themeColors.border};
//   border-radius: 4px;
//   ${({ theme }) => theme.typography.body1.regular};

//   &::placeholder {
//     color: ${({ theme }) => theme.themeColors.textSecondary};
//   }
// `;

const SearchResultSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Result;
