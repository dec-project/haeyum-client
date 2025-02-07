import FixedBottom from '@/common/components/FixedBottom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <TextWrapper>
        <Text>페이지를 찾을 수 없습니다.</Text>
      </TextWrapper>
      <FixedBottom>
        <Button onClick={handleHomeClick}>
          <span>홈으로 가기</span>
        </Button>
      </FixedBottom>
    </>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 88px);
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.title3.bold};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.themeColors.secondary};
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => theme.typography.body1.bold};
`;

export default ErrorPage;
