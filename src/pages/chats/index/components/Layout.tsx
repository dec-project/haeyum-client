import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AppBar text="채팅" />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
