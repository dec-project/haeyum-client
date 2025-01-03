import styled from 'styled-components';
import Logo from '../Logo';
import ArrowLeft from './ArrowLeft';
import Heart from './Heart';
import GoHome from './GoHome';
import CompleteButton from './CompleteButton';

interface AppBarProps {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const AppBar = ({ leftContent, centerContent, rightContent }: AppBarProps) => {
  return (
    <Container>
      <Left>
        {leftContent} {centerContent}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 16px;
  width: 100%;
  height: 72px;
  max-width: var(--max-width);
  min-width: var(--min-width);
  span {
    ${({ theme }) => theme.typography.title3.bold}
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  size: 24px;
  cursor: pointer;
`;

export default AppBar;

AppBar.logo = Logo;
AppBar.ArrowLeft = ArrowLeft;
AppBar.Heart = Heart;
AppBar.GoHome = GoHome;
AppBar.CompleteButton = CompleteButton;
