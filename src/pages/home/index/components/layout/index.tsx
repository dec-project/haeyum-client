import styled from 'styled-components';
import AppBar from '../../../../../common/components/appbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <AppBar leftContent={<AppBar.logo />} />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: var(--max-width);
`;

const Wrapper = styled.div`
  padding-top: 72px;
`;

export default Layout;
