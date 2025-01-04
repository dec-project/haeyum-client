import styled from 'styled-components';
import FixedBottom from '@/common/components/fixedBottom';
import IconChatDot from '@/common/assets/icon/icon-chat-dot.svg';
import Container from '@/common/components/layout/Container';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
import Sunny from '@/common/assets/icon/sunny.png';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Trip = () => {
  return (
    <Container>
      <WeatherWrapper>
        <ContentWrapper>
          <WeatherHeader>오늘의 날씨</WeatherHeader>
          <ContentSubTitle>맑음</ContentSubTitle>
        </ContentWrapper>
        <WeatherImage src={Sunny} alt="weather" />
      </WeatherWrapper>

      <SectionHeader>노래 TOP 5</SectionHeader>
      <ItemList>
        <Item>
          <Image src={DEFAULT_IMAGE} alt="music" />
          <ContentWrapper>
            <ContentTitle>1. 그대 없이는 못살아</ContentTitle>
            <ContentSubTitle>패티킴</ContentSubTitle>
          </ContentWrapper>
          <Icon src={ArrowRight} alt="arrow-right" />
        </Item>
      </ItemList>

      <SectionHeader>영화 TOP 5</SectionHeader>
      <ItemList>
        <Item>
          <Image src={DEFAULT_IMAGE} alt="movie" />
          <ContentWrapper>
            <ContentTitle>1. 조커</ContentTitle>
          </ContentWrapper>
          <Icon src={ArrowRight} alt="arrow-right" />
        </Item>
      </ItemList>

      <FixedBottom>
        <ButtonWrapper>
          <Button>
            <ChatIcon src={IconChatDot} />
            <span>90년대 채팅방</span>
          </Button>
        </ButtonWrapper>
      </FixedBottom>
    </Container>
  );
};

const WeatherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
`;

const WeatherHeader = styled.h3`
  ${({ theme }) => theme.typography.body1.bold};
`;

const WeatherImage = styled.img`
  width: 8.125rem;
  border-radius: 4px;
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
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-right: 16px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.themeColors.secondary};
  border-radius: 4px;
  ${({ theme }) => theme.typography.body1.bold};

  & > span {
    margin-top: 1px;
  }
`;

const ChatIcon = styled.img``;

export default Trip;
