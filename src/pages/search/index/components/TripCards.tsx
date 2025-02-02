import { TripCard } from '@/common/apis/search/types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TripCardsProps {
  items: TripCard[];
  count: number;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const TripCards = ({ items, count }: TripCardsProps) => {
  const navigate = useNavigate();

  const handleCardClick = (calendarId: string, calendarDate: string, chatroomId: number) => {
    navigate(`/trip/${calendarId}/${calendarDate}/${chatroomId}`);
  };

  return (
    <>
      <ResultCount>검색 결과 {count}</ResultCount>
      <TripCardList>
        {items.map((item) => (
          <Card
            key={item.calendarId}
            onClick={() => handleCardClick(item.calendarId, item.calendarDate, item.chatroomId)}
          >
            <ImageWrapper>
              <Image src={`${BASE_URL}${item.imgUrl}`} alt={item.calendarName} />
            </ImageWrapper>
            <TextWrapper>
              <Title>{item.calendarName}</Title>
              <Counts>
                조회 {item.viewCount} · ♥ {item.favoriteCount}
              </Counts>
            </TextWrapper>
          </Card>
        ))}
      </TripCardList>
    </>
  );
};

const ResultCount = styled.span`
  padding: 4px 0 8px 0;
  ${({ theme }) => theme.typography.body1.regular};
`;

const TripCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 16px 0;
`;

const Card = styled.li`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  margin: 12px 0;
`;

const Title = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
`;

const Counts = styled.p`
  color: ${({ theme }) => theme.themeColors.textSecondary};
  ${({ theme }) => theme.typography.body2.regular};
`;

export default TripCards;
