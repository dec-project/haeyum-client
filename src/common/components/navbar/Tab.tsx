import styled from 'styled-components';
import Home from '@/common/assets/icon/icon-home.svg';
import Search from '@/common/assets/icon/icon-search.svg';
import Chat from '@/common/assets/icon/icon-chat.svg';
import Profile from '@/common/assets/icon/icon-people.svg';
import { TAB_LIST } from '../../constants/TAB_LIST';
import { TabType } from '.';

const TAB_ICON = [Home, Search, Chat, Profile];
interface TabProps {
  tab: TabType;
  currentTab: TabType;
  // eslint-disable-next-line no-unused-vars
  handleTabClick: (tab: TabType) => void;
}

const Tab = ({ tab, currentTab, handleTabClick }: TabProps) => {
  return (
    <List active={currentTab === tab} onClick={() => handleTabClick(tab)}>
      <IconBox>
        <Icon active={currentTab === tab} src={TAB_ICON[TAB_LIST.indexOf(tab)]} alt={tab} />
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

const Icon = styled.img.withConfig({ shouldForwardProp: (prop) => prop !== 'active' })<{ active: boolean }>`
  width: 24px;
  height: 24px;
`;

export default Tab;
