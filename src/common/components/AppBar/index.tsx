import styled from 'styled-components';
import BackButton from './BackButton';
import Heart from './Heart';
import GoHome from './GoHome';
import CompleteButton from './CompleteButton';
import { ReactNode } from 'react';
import Logo from './Logo';

interface AppBarProps {
  leftContent?: ReactNode;
  text?: string;
  rightContent?: ReactNode;
}

const AppBar = ({ leftContent, text, rightContent }: AppBarProps) => {
  return (
    <Container>
      <Left>
        {leftContent && <div>{leftContent}</div>}
        <span>{text}</span>
      </Left>
      <Right>
        <Icon>{rightContent}</Icon>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  right: auto;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 16px 16px 8px;
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.themeColors.background};
  max-width: var(--max-width);
  min-width: var(--min-width);
`;

const Left = styled.div`
  display: flex;
  align-items: top;

  & > div {
    margin-right: 24px;
    display: flex;
    align-items: center;
  }

  & > span {
    ${({ theme }) => theme.typography.title3.bold};
    white-space: nowrap;
    max-width: 100%;
  }
`;

const Right = styled.div``;

const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default AppBar;

AppBar.Logo = Logo;
AppBar.BackButton = BackButton;
AppBar.Heart = Heart;
AppBar.GoHome = GoHome;
AppBar.CompleteButton = CompleteButton;
