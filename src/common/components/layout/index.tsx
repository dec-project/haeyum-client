import { ReactNode } from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  width: 100%;
  min-width: var(--min-width);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 16px;
`;

export default Layout;
