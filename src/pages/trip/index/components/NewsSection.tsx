import styled from 'styled-components';
import useNews from '../hooks/useNews';
import LoadingSpinner from '@/common/components/spinner';

interface NewsSectionProps {
  calendarId: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const NewsSection = ({ calendarId }: NewsSectionProps) => {
  const { data: newsData, isLoading, isError, error } = useNews(calendarId);

  const category = ['최신 기사'];

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError || !newsData?.itemList || newsData.itemList.length === 0) {
    const errorMessage = error?.message || '뉴스 데이터를 가져오는 중 문제가 발생했습니다.';
    return (
      <Section>
        <p>{errorMessage}</p>
      </Section>
    );
  }

  return (
    <section>
      <MenuBar>
        <Tab>{category[0]}</Tab>
      </MenuBar>
      <NewsCardList>
        {newsData?.itemList.map((news, index) => (
          <NewsCard key={index} onClick={() => window.open(news.url, '_blank')}>
            <ImageWrapper>
              <Image src={`${BASE_URL}${news.img}`} alt="news" />
            </ImageWrapper>
            <TextWrapper>
              <Title>{news.title}</Title>
              <Description>{news.content}</Description>
            </TextWrapper>
          </NewsCard>
        ))}
      </NewsCardList>
    </section>
  );
};

const Section = styled.section`
  padding: 0 16px;
`;

const MenuBar = styled.div`
  display: flex;
  margin: 0 16px;
`;

const Tab = styled.span`
  flex: 1;
  max-width: 30%;
  padding: 16px 0 12px 0;
  border-bottom: 3px solid ${({ theme }) => theme.themeColors.secondary};
  ${({ theme }) => theme.typography.label.bold};
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.themeColors.textPrimary};
`;

const NewsCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.themeColors.border};
`;

const NewsCard = styled.li`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 56%;
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

const Title = styled.h1`
  ${({ theme }) => theme.typography.body1.medium};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3em;
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 4.5em;
`;

export default NewsSection;
