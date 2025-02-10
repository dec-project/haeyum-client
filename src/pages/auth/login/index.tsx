import styled from 'styled-components';
import IconKakao from '@/common/assets/icon/icon-kakao.svg';
import AppBar from '@/common/components/AppBar';
import Container from '@/common/components/Layout/Container';
import FixedBottom from '@/common/components/FixedBottom';

const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

const LoginPage = () => {
  const handleRedirectToKakao = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <>
      <AppBar leftContent={<AppBar.BackButton />} text="로그인" />
      <Container>
        <FixedBottom>
          <Button onClick={handleRedirectToKakao}>
            <KakaoIcon src={IconKakao} alt="카카오 로그인" role="presentation" />
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
  cursor: pointer;
  ${({ theme }) => theme.typography.body1.bold};
`;

const KakaoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default LoginPage;
