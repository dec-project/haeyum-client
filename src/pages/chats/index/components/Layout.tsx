import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';
import MetaTag from '@/common/components/MetaTag';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MetaTag
        title="헤윰 - 채팅목록"
        description="참여 중인 채팅방을 확인하고, 새로운 대화를 시작해 보세요!"
        keywords="채팅, 대화, 시간 여행, 헤윰"
      />
      <AppBar text="채팅" />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
