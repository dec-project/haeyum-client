import { EmblaOptionsType } from 'embla-carousel';
import CarouselLayout from './CarouselLayout';
import styled from 'styled-components';

const Carousel = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const SLIDE_DATA = [
    {
      chatroomId: 1,
      chatroomName: '전체 채팅방',
      chatCnt: 177,
      img: 'https://picsum.photos/seed/picsum/200/300',
      ranking: 0,
    },
    {
      chatroomId: 2,
      chatroomName: '1980s',
      chatCnt: 150,
      img: 'https://picsum.photos/seed/picsum/200/300',
      ranking: 1,
    },
    {
      chatroomId: 3,
      chatroomName: '1990s',
      chatCnt: 120,
      img: 'https://picsum.photos/seed/picsum/200/300',
      ranking: 2,
    },
    {
      chatroomId: 4,
      chatroomName: '2000s',
      chatCnt: 100,
      img: 'https://picsum.photos/seed/picsum/200/300',
      ranking: 3,
    },
    {
      chatroomId: 5,
      chatroomName: '2010s',
      chatCnt: 180,
      img: 'https://picsum.photos/seed/picsum/200/300',
      ranking: 4,
    },
  ];
  return (
    <Container>
      <CarouselLayout slides={SLIDE_DATA.sort((a, b) => a.ranking - b.ranking)} options={OPTIONS} />
    </Container>
  );
};

const Container = styled.div`
  max-width: var(--max-width);
  min-width: var(--min-width);
`;

export default Carousel;
