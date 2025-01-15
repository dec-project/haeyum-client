import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
import useMovie from '../hooks/useMovie';
import LoadingSpinner from '@/common/components/spinner';

interface MovieChartProps {
  calendarId: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MovieChart = ({ calendarId }: MovieChartProps) => {
  const navigate = useNavigate();
  const { data: movieData, isLoading, isError, error } = useMovie(calendarId);

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError || !movieData?.itemList || movieData.itemList.length === 0) {
    const errorMessage = error?.message || '영화 데이터를 가져오는 중 문제가 발생했습니다.';

    return (
      <Section>
        <p>{errorMessage}</p>
      </Section>
    );
  }

  const handleDetail = (movieId: number) => {
    navigate(`/trip/${calendarId}/detail?movieId=${movieId}`);
  };

  return (
    <Section>
      <SectionHeader>영화 TOP 5</SectionHeader>
      <ItemList>
        {movieData.itemList.map((item) => (
          <Item key={item.movieId} onClick={() => handleDetail(item.movieId)}>
            <Image src={`${BASE_URL}/${item.img}`} alt={`movie-${item.movieId}`} />
            <ContentWrapper>
              <ContentTitle>
                {item.ranking}. {item.title}
              </ContentTitle>
            </ContentWrapper>
            <Icon src={ArrowRight} alt="arrow-right" />
          </Item>
        ))}
      </ItemList>
    </Section>
  );
};

const Section = styled.section`
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
