import React from 'react';
import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';
import MetaTag from '@/common/components/MetaTag';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MetaTag
        title="헤윰 - 마이페이지"
        description="내 프로필과 설정을 관리하고, 나의 시간 여행 기록을 확인해 보세요."
        keywords="마이페이지, 프로필, 설정, 계정 관리, 헤윰"
      />
      <AppBar text="프로필" />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
