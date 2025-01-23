import { EmblaOptionsType } from 'embla-carousel';
import CarouselLayout from './CarouselLayout';
import useChatRanking from '../hooks/useChatRanking';
import LoadingSpinner from '@/common/components/spinner';
import { Container } from '@/common/components/calendar/CommonStyle';

const Carousel = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const { data: ChatData, isLoading, isError } = useChatRanking();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !ChatData) {
    return <Container>채팅 데이터를 가져오는 중 문제가 발생했습니다.</Container>;
  }
  return (
    <div>
      <CarouselLayout slides={ChatData} options={OPTIONS} />
    </div>
  );
};

export default Carousel;
