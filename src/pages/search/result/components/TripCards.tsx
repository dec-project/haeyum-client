import styled from 'styled-components';
import { TripCard } from '../types';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1725714834773-b5f278346915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface TripCardsProps {
  items: TripCard[];
  count: number;
}

const TripCards = ({ items, count }: TripCardsProps) => {
  return (
    <>
      <ResultCount>검색 결과 {count}</ResultCount>
      <TripCardList>
        {items.map((item) => (
          <li key={item.calendarId}>
            <ImageWrapper>
              <Image src={item.img || DEFAULT_IMAGE} alt={item.calendarName} />
            </ImageWrapper>
            <TextWrapper>
              <Title>{item.calendarName}</Title>
              <Counts>
                조회 {item.viewCount} · ♥ {item.favoriteCount}
              </Counts>
            </TextWrapper>
          </li>
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
