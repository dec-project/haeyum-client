import React from 'react';
import styled from 'styled-components';
import { TabType } from '../../types/TabType';

interface TabProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
  tab: TabType;
  currentTab: TabType;
  handleTabClick: (tab: TabType) => void;
}

const Tab = ({ icon, tab, currentTab, handleTabClick }: TabProps) => {
  return (
    <List active={currentTab === tab} onClick={() => handleTabClick(tab)}>
      <IconBox>
        <Icon as={icon} active={currentTab === tab} />
      </IconBox>
      <span>{tab}</span>
    </List>
  );
};

const List = styled.button.withConfig({ shouldForwardProp: (prop) => prop !== 'active' })<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 83px;
  height: 54px;
  align-items: center;
  ${({ theme }) => theme.typography.nav.medium};
  color: ${({ active, theme }) => (active ? theme.themeColors.textPrimary : theme.themeColors.textSecondary)};
  & > span {
    width: fit-content;
    height: 18px;
  }
  cursor: pointer;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 32px;
`;

const Icon = styled.svg.withConfig({ shouldForwardProp: (prop) => prop !== 'active' })<{ active: boolean }>`
  width: 24px;
  height: 24px;
  path:nth-child(1) {
    fill: ${({ active, theme }) => (active ? theme.themeColors.textPrimary : theme.themeColors.textSecondary)};
  }
`;

export default Tab;
