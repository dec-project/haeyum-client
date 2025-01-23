import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
// import ChatIcon from '../../../../common/assets/icon/icon-chat.svg';
import DefaultImg from '@/common/assets/logo/logo.svg';
import { ChatRanking } from '@/common/apis/ranking/type';
import { useNavigate } from 'react-router-dom';

type CarouselLayoutProps = {
  slides: ChatRanking[];
  options?: EmblaOptionsType;
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CarouselLayout = (props: CarouselLayoutProps) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();
  const onClickChat = ({ roomId, roomName }: { roomId: number; roomName: String }) => {
    navigate(`/chats/${roomId}/${roomName}`);
  };

  return (
    <Container>
      <Viewport ref={emblaRef}>
        <CardContainer>
          {slides.map((slide, index) => (
            <Slide key={index} onClick={() => onClickChat({ roomId: slide.roomId, roomName: slide.name })}>
              <SlideImage src={`${BASE_URL}${slide.imgUrl}` || DefaultImg} alt={slide.name} />
              <SlideInfo>
                <Title>{slide.name}</Title>
                {/* TODO : api 추가 되면 주석 해제 해줘야 함 */}
                {/* <Label>
                  <Chat src={ChatIcon} alt="chat" />
                  <Count>{slide.chatCnt}</Count>
                </Label> */}
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
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  cursor: pointer;
`;

const SlideImage = styled.img`
  width: 240px;
  height: 320px;
  border-radius: 0.4rem;
`;

const SlideInfo = styled.div`
  margin-top: 0.8rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.body1.medium}
`;

// const Label = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Chat = styled.img`
//   width: 1.2rem;
//   height: 1.2rem;
// `;

// const Count = styled.div`
//   ${({ theme }) => theme.typography.body2.regular}
//   color: ${({ theme }) => theme.colors.orange500};
// `;
