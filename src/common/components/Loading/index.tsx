import styled from 'styled-components';

const Loading = () => {
  return (
    <TextWrapper>
      <Text>잠시만 기다려주세요.</Text>
    </TextWrapper>
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

export default Loading;
