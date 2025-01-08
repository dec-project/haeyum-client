import { useState } from 'react';
import styled from 'styled-components';
import { categoryTabs, newsData } from './data';

// TODO: 추후 API 연동
const NewsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <MenuBar>
        {categoryTabs.map((tab, index) => (
          <Tab key={index} className={activeTab === index ? 'active' : ''} onClick={() => setActiveTab(index)}>
            {tab}
          </Tab>
        ))}
      </MenuBar>
      <TextWrapper>
        <Title>{newsData[activeTab].title}</Title>
        <Description>{newsData[activeTab].description}</Description>
        <MoreButton>자세히 보기</MoreButton>
      </TextWrapper>
    </section>
  );
};

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
`;

export default NewsSection;
