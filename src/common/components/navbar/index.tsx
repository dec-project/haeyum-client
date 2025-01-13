import { useEffect, useState } from 'react';
import { TAB_LIST } from '../../constants/TAB_LIST';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Tab from './Tab';

export type TabType = (typeof TAB_LIST)[number];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [currentTab, setCurrentTab] = useState<TabType>('홈');
  const handleTabClick = (tab: TabType) => {
    setCurrentTab(tab);
    switch (tab) {
      case '홈':
        navigate('/');
        break;
      case '검색':
        navigate('/search');
        break;
      case '채팅':
        navigate('/chats');
        break;
      case '내 여행':
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (pathname.includes('search')) setCurrentTab('검색');
    else if (pathname.includes('chats')) setCurrentTab('채팅');
    else if (pathname.includes('profile')) setCurrentTab('내 여행');
    else setCurrentTab('홈');
  }, [pathname]);

  return (
    <Wrapper>
      <Nav>
        {TAB_LIST.map((tab) => (
          <Tab key={tab} tab={tab} currentTab={currentTab} handleTabClick={() => handleTabClick(tab)} />
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
  padding: 8px 8px 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  align-items: center;
  background-color: ${({ theme }) => theme.themeColors.background};
  max-width: var(--max-width);
  min-width: var(--min-width);
`;

const Wrapper = styled.div`
  padding-bottom: 75px;
`;

export default Navbar;
