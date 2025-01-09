import { useState } from 'react';
import styled from 'styled-components';
import { newsData } from './data';
// import useNews from '../hooks/useNews';
// import LoadingSpinner from '@/common/components/spinner';
import { NewsSummary } from '../types';

// interface NewsSectionProps {
//   calendarId: string;
// }

const NewsSection = () => {
  // TODO: API 연동 후 주석 해제
  // const NewsSection = ({ calendarId }: NewsSectionProps) => {
  // const { data: newsData, isLoading, isError, error } = useNews(calendarId);

  const [activeTab, setActiveTab] = useState(0);

  const categoryTabs = newsData.itemList.map((news: NewsSummary) => news.category);

  const sortedNews = categoryTabs.map((category: string) =>
    newsData.itemList.find((news: NewsSummary) => news.category === category),
  );

  // TODO: API 연동 후 주석 해제
  // if (isLoading) {
  //   // TODO: 추후 로딩 페이지 추가
  //   return <LoadingSpinner />;
  // }
  // if (isError || !newsData.itemList || newsData.itemList.length === 0) {
  //   const errorMessage = error?.message || '뉴스 데이터를 가져오는 중 문제가 발생했습니다.';
  //   return (
  //     <Section>
  //       <p>{errorMessage}</p>
  //     </Section>
  //   );
  // }

  console.log(`newsData: ${newsData}`);
  return (
    <section>
      <MenuBar>
        {categoryTabs.map((tab: string, index: number) => (
          <Tab key={index} className={activeTab === index ? 'active' : ''} onClick={() => setActiveTab(index)}>
            {tab}
          </Tab>
        ))}
      </MenuBar>
      <TextWrapper>
        <Title>{sortedNews[activeTab]?.title}</Title>
        <Description>{sortedNews[activeTab]?.content}</Description>
        <MoreButton onClick={() => window.open(sortedNews[activeTab]?.url, '_blank')}>자세히 보기</MoreButton>
      </TextWrapper>
    </section>
  );
};

// const Section = styled.section`
//   padding: 0 16px;
// `;

const MenuBar = styled.ul`
  display: flex;
  margin: 0 16px;
`;

const Tab = styled.li`
  flex: 1;
  padding: 16px 0 13px 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.typography.label.bold};
  text-align: center;
  color: ${({ theme }) => theme.themeColors.textSecondary};
  cursor: pointer;

  &.active {
    border-color: ${({ theme }) => theme.themeColors.secondary};
    color: ${({ theme }) => theme.themeColors.textPrimary};
  }
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
  cursor: pointer;
`;

export default NewsSection;
