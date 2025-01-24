import React from 'react';
import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar leftContent={<AppBar.ArrowLeft />} text="프로필" />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
