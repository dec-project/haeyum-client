import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { movieSummary } from '../types';
import { DEFAULT_IMAGE } from './data';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
import useMovie from '../hooks/useMovie';
import LoadingSpinner from '@/common/components/spinner';

interface MovieChartProps {
  calendarId: string;
}

// TODO: 서버 배포시 반영
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MovieChart = ({ calendarId }: MovieChartProps) => {
  const navigate = useNavigate();

  const { data: movieData, isLoading, isError } = useMovie(calendarId);

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError || !movieData.itemList) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>영화 데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }

  const handleDetailClick = (movieId: number) => {
    navigate(`/trip/${movieId}/detail`);
  };

  return (
    <ChartSection>
      <SectionHeader>영화 TOP 5</SectionHeader>
      <ItemList>
        {movieData.itemList.map((item: movieSummary) => (
          <Item key={item.movieId} onClick={() => handleDetailClick(item.movieId)}>
            <Image
              // TODO: 서버 배포시 반영
              // src={`${BASE_URL}/${item.img}`}
              src={`${item.img}`}
              alt={`movie-${item.movieId}`}
              // TODO: 임시 기본 이미지, 서버 배포시 삭제
              onError={(e) => {
                e.currentTarget.src = DEFAULT_IMAGE;
              }}
            />
            <ContentWrapper>
              <ContentTitle>
                {item.ranking}. {item.title}
              </ContentTitle>
            </ContentWrapper>
            <Icon src={ArrowRight} alt="arrow-right" />
          </Item>
        ))}
      </ItemList>
    </ChartSection>
  );
};

const ChartSection = styled.section`
  padding: 0 16px;
`;

const SectionHeader = styled.h2`
  padding: 20px 0 12px;
  ${({ theme }) => theme.typography.title2.bold};
`;

const ItemList = styled.ul``;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
`;

const Image = styled.img`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ContentTitle = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export default MovieChart;
