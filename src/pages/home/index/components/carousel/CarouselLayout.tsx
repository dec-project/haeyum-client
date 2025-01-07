import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import ChatIcon from '../../../../../common/assets/icon/icon-chat.svg';

type SlideType = {
  chatroomId: number;
  chatroomName: string;
  chatCnt: number;
  img: string;
  ranking: number;
};

type CarouselLayoutProps = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const CarouselLayout = (props: CarouselLayoutProps) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <Container>
      <Viewport ref={emblaRef}>
        <CardContainer>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <SlideImage src={slide.img} alt={slide.chatroomName} />
              <SlideInfo>
                <Title>{slide.chatroomName}</Title>
                <Label>
                  <Chat src={ChatIcon} alt="chat" />
                  <Count>{slide.chatCnt}</Count>
                </Label>
              </SlideInfo>
            </Slide>
          ))}
        </CardContainer>
      </Viewport>
    </Container>
  );
};

export default CarouselLayout;

const Container = styled.div`
  margin: auto;
  max-width: var(--max-width);
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const Slide = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const SlideImage = styled.img`
  width: 240px;
  height: 320px;
  border-radius: 0.4rem;
  object-fit: cover;
`;

const SlideInfo = styled.div`
  margin-top: 0.8rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.body1.medium}
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

const Chat = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const Count = styled.div`
  ${({ theme }) => theme.typography.body2.regular}
  color: ${({ theme }) => theme.colors.orange500};
`;
