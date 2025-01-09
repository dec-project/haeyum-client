import React from 'react';
import styled from 'styled-components';
import AppBar from '../../../../common/components/appbar';
import Navbar from '../../../../common/components/navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <AppBar leftContent={<AppBar.Logo />} />
      <Wrapper>{children}</Wrapper>
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
`;

const Wrapper = styled.div`
  padding-top: 72px;
`;

export default Layout;
