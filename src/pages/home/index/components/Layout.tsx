import React from 'react';
import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar leftContent={<AppBar.Logo />} />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
