import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
import { useMovie } from '../hooks/useMovie';
import { BASE_URL } from '@/config';

interface MovieChartProps {
  calendarId: string;
}

const MovieChart = ({ calendarId }: MovieChartProps) => {
  const navigate = useNavigate();
  const { data: movieData, isError } = useMovie(calendarId);

  if (isError || !movieData?.itemList || movieData.itemList.length === 0) {
    return null;
  }

  const handleDetailClick = (movieId: number) => {
    navigate(`/trip/${calendarId}/detail?movieId=${movieId}`);
  };

  return (
    <Section>
      <SectionHeader>영화 TOP 5</SectionHeader>
      <ul>
        {movieData.itemList.map((item) => (
          <Item key={item.movieId} onClick={() => handleDetailClick(item.movieId)}>
            <Image src={`${BASE_URL}${item.imgUrl}`} alt={`${item.title}`} />
            <ContentWrapper>
              <ContentTitle>
                {item.ranking}. {item.title}
              </ContentTitle>
            </ContentWrapper>
            <Icon src={ArrowRight} alt="영화 상세 이동" />
          </Item>
        ))}
      </ul>
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

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
`;

const Image = styled.img`
  margin-right: 16px;
  width: 56px;
  height: 75px;
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
