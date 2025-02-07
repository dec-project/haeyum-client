import AppBar from '@/common/components/AppBar';
import Container from '@/common/components/Layout/Container';
import { ReactNode } from 'react';

const Layout = ({ children, roomName }: { children: ReactNode; roomName: string | undefined }) => {
  return (
    <>
      <AppBar leftContent={<AppBar.ArrowLeft />} text={roomName} />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
