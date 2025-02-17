import { useNavigate } from 'react-router-dom';
import Container from '@/common/components/Layout/Container';
import LoadingSpinner from '@/common/components/Spinner';
import { useUser } from './hooks/useUser';

const CallbackPage = () => {
  const navigate = useNavigate();
  const { mutate, isError } = useUser();

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (!code) {
    navigate('/login');
    return;
  }

  mutate(code);

  return <Container>{isError ? '로그인 중 오류가 발생했습니다.' : <LoadingSpinner />}</Container>;
};

export default CallbackPage;
