import React from 'react';
import AppBar from '@/common/components/AppBar';
import MetaTag from '@/common/components/MetaTag';
import Container from '@/common/components/Layout/Container';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MetaTag
        title="헤윰 - 디지털 시간 여행 플랫폼"
        description="과거의 순간을 탐험하는 디지털 시간 여행 플랫폼, 헤윰에서 확인해 보세요!"
        keywords="디지털 시간 여행, 역사, 채팅, 인기 검색어"
      />
      <AppBar leftContent={<AppBar.Logo />} />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
