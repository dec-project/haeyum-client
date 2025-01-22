import FixedBottom from '@/common/components/fixedBottom';
import styled from 'styled-components';
import IconKakao from '@/common/assets/icon/icon-kakao.svg';
import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = `${BASE_URL}/oauth/kakao/authorize/fallback`;

const LoginPage = () => {
  const handleRedirectToKakao = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <>
      <AppBar leftContent={<AppBar.ArrowLeft />} text="로그인" />
      <Container>
        <FixedBottom>
          <Button onClick={handleRedirectToKakao}>
            <KakaoIcon src={IconKakao} alt="kakao-icon" />
            <span>카카오 로그인</span>
          </Button>
        </FixedBottom>
      </Container>
    </>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: #fee500;
  border-radius: 4px;
  ${({ theme }) => theme.typography.body1.bold};
`;

const KakaoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default LoginPage;
