import { ReactNode } from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export default Layout;
