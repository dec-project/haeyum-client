import styled from 'styled-components';
import FixedBottom from '@/common/components/fixedBottom';
import IconChatDot from '@/common/assets/icon/icon-chat-dot.svg';
import Container from '@/common/components/layout/Container';

const Trip = () => {
  return (
    <Container>
      <h1>Trips</h1>
      <FixedBottom>
        <ButtonWrapper>
          <Button>
            <Icon src={IconChatDot} />
            <span>90년대 채팅방</span>
          </Button>
        </ButtonWrapper>
      </FixedBottom>
    </Container>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.themeColors.secondary};
  border-radius: 4px;
  ${({ theme }) => theme.typography.body1.bold};

  & > span {
    margin-top: 1px;
  }
`;

const Icon = styled.img``;

export default Trip;
