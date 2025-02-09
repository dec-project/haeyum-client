import styled from 'styled-components';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
import useMusic from '../hooks/useMusic';
import LoadingSpinner from '@/common/components/spinner';
import { useNavigate } from 'react-router-dom';

interface MusicChartProps {
  calendarId: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MusicChart = ({ calendarId }: MusicChartProps) => {
  const navigate = useNavigate();
  const { data: musicData, isLoading, isError } = useMusic(calendarId);

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError || !musicData?.songSummaries || musicData.songSummaries.length === 0) {
    // TODO: 추후 에러 컴포넌트 추가
    console.error('해당 날짜의 노래 데이터가 없습니다.');
    return null;
  }

  const handleDetailClick = (musicId: number) => {
    navigate(`/trip/${calendarId}/detail?musicId=${musicId}`);
  };

  return (
    <Section>
      <SectionHeader>노래 TOP 5</SectionHeader>
      <ItemList>
        {musicData.songSummaries.map((item) => (
          <Item key={item.songId} onClick={() => handleDetailClick(item.songId)}>
            <Image src={`${BASE_URL}${item.imgUrl}`} alt={`music-${item.songId}`} />
            <ContentWrapper>
              <ContentTitle>
                {item.ranking}. {item.title}
              </ContentTitle>
              <ContentSubTitle>{item.artists}</ContentSubTitle>
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
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 4px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ContentTitle = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
`;

const ContentSubTitle = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export default MusicChart;
