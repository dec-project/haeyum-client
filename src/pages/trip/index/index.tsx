import { useState } from 'react';
import styled from 'styled-components';
import FixedBottom from '@/common/components/fixedBottom';
import IconChatDot from '@/common/assets/icon/icon-chat-dot.svg';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
// import { useParams } from 'react-router-dom';
// import useWeather from './hooks/useWeather';
// import useMusic from './hooks/useMusic';
// import useMovie from './hooks/useMovie';
import { categoryTabs, newsData, weatherData, movieData, musicData } from './components/data';
import { movieSummary, musicSummary } from './types';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Trip = () => {
  // const { calendarId } = useParams();

  // const { data: weatherData } = useWeather(calendarId);
  // const { data: musicData } = useMusic(calendarId);
  // const { data: movieData } = useMovie(calendarId);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <NewsSection>
        <MenuBar>
          {categoryTabs.map((tab, index) => (
            <Tab key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
              {tab}
            </Tab>
          ))}
        </MenuBar>
        <TextWrapper>
          <Title>{newsData[activeTab].title}</Title>
          <Description>{newsData[activeTab].description}</Description>
          <MoreButton>자세히 보기</MoreButton>
        </TextWrapper>
      </NewsSection>

      <WeatherSection>
        <ContentWrapper>
          <WeatherHeader>오늘의 날씨</WeatherHeader>
          <ContentSubTitle>{weatherData.weather}</ContentSubTitle>
        </ContentWrapper>
        <WeatherImage src={weatherData.img} alt="weather" />
      </WeatherSection>

      <ChartSection>
        <SectionHeader>노래 TOP 5</SectionHeader>
        <ItemList>
          {musicData.songSummaries.map((item: musicSummary) => (
            <Item key={item.songId}>
              <Image src={item.imgUrl || DEFAULT_IMAGE} alt={`music-${item.songId}`} />
              <ContentWrapper>
                <ContentTitle>
                  {item.ranking}. {item.title}
                </ContentTitle>
                <ContentSubTitle>{item.artist[0]}</ContentSubTitle>
              </ContentWrapper>
              <Icon src={ArrowRight} alt="arrow-right" />
            </Item>
          ))}
        </ItemList>
      </ChartSection>

      <ChartSection>
        <SectionHeader>영화 TOP 5</SectionHeader>
        <ItemList>
          {movieData.itemList.map((item: movieSummary) => (
            <Item key={item.movieId}>
              <Image src={item.img || DEFAULT_IMAGE} alt={`movie-${item.movieId}`} />
              <ContentWrapper>
                <ContentTitle>
                  {item.ranking}. {item.title}
                </ContentTitle>
              </ContentWrapper>
              <Icon src={ArrowRight} alt="arrow-right" />
            </Item>
          ))}
        </ItemList>
      </ChartSection>

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

const Container = styled.div`
  margin-top: 72px;
  padding-bottom: 92px;
`;

const NewsSection = styled.section``;

const MenuBar = styled.ul`
  display: flex;
  margin: 0 16px;
`;

const Tab = styled.li<{ active?: boolean }>`
  flex: 1;
  padding: 16px 0 13px 0;
  max-width: calc(100% / 4);
  border-bottom: 3px solid ${({ active, theme }) => (active ? theme.themeColors.secondary : theme.colors.gray)};
  ${({ theme }) => theme.typography.label.bold};
  text-align: center;
  color: ${({ active, theme }) => (active ? theme.themeColors.textPrimary : theme.themeColors.textSecondary)};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  border-top: 1px solid ${({ theme }) => theme.themeColors.border};
`;

const Title = styled.h1`
  padding: 20px 0 12px;
  ${({ theme }) => theme.typography.title1.bold};
  text-align: center;
`;

const Description = styled.p`
  padding: 4px 0 12px;
`;

const MoreButton = styled.button`
  margin: 12px 0;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.orange200};
  border-radius: 4px;
  ${({ theme }) => theme.typography.label.bold};
`;

const WeatherSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
`;

const WeatherHeader = styled.h3`
  ${({ theme }) => theme.typography.body1.bold};
`;

const WeatherImage = styled.img`
  width: 8.125rem;
  border-radius: 4px;
`;

const ChartSection = styled.section`
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

const ChatIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default Trip;
