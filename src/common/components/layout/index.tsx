import { ReactNode } from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  min-width: var(--min-width);
  max-width: var(--max-width);
  margin: 0 auto;
`;

export default Layout;
