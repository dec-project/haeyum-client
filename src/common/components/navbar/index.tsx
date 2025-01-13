import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Tab from './Tab';
import { TabType } from '../../types/TabType';
import { TAB_ITEM } from '../../constants/tabItems';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [currentTab, setCurrentTab] = useState<TabType>('홈');
  const handleTabClick = (tab: TabType) => {
    const selectedTab = TAB_ITEM.find((item) => item.name === tab);
    if (selectedTab) {
      setCurrentTab(tab);
      navigate(selectedTab.path);
    }
  };

  useEffect(() => {
    const matchedTab = TAB_ITEM.find((item) => pathname === item.path);
    if (matchedTab) {
      setCurrentTab(matchedTab.name);
    }
  }, [pathname]);

  return (
    <Wrapper>
      <Nav>
        {TAB_ITEM.map((tab) => (
          <Tab icon={tab.icon} key={tab.name} tab={tab.name} currentTab={currentTab} handleTabClick={handleTabClick} />
        ))}
      </Nav>
      <Outlet />
    </Wrapper>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: auto;
  right: auto;
  z-index: 100;
  padding: 8px 16px 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  align-items: flex-start;
  border-top: 1px solid #f5ebd9;
  background-color: ${({ theme }) => theme.themeColors.background};
  max-width: var(--max-width);
  min-width: var(--min-width);
`;

const Wrapper = styled.div`
  padding-bottom: 75px;
`;

export default Navbar;
