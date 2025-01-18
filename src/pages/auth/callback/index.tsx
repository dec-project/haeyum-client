import Container from '@/common/components/layout/Container';
import { useAuthStore } from '@/common/stores/useAuthStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const navigate = useNavigate();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');

    if (accessToken && refreshToken) {
      setTokens(accessToken, refreshToken);
      navigate('/');
    } else {
      console.error('토큰이 없습니다.');
      navigate('/login');
    }
  }, [navigate, setTokens]);

  // TODO: 디자인 수정 or 로딩 페이지 추가
  return <Container>로그인 중입니다.</Container>;
};

export default CallbackPage;