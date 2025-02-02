import LoadingSpinner from '@/common/components/spinner';
import useChatList from './hooks/useChatList';
import styled from 'styled-components';
import Layout from './components/Layout';
import { useNavigate } from 'react-router-dom';
import { convertDate } from './utils/convertDate';
import { useAuthStore } from '@/common/stores/useAuthStore';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Chats = () => {
  const navigate = useNavigate();
  const isLogin = useAuthStore.getState().isLogin();

  const { data: chatListData, isLoading, isError, error } = useChatList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !chatListData || chatListData.length === 0) {
    const errorMessage = error?.message || '채팅 데이터를 가져오는 중 문제가 발생했습니다.';
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );
  }

  const onClickChat = ({ chatroomId, roomName }: { chatroomId: number; roomName: String }) => {
    if (!isLogin) {
      navigate('/login');
    } else {
      navigate(`/chats/${chatroomId}/${roomName}`);
    }
  };

  return (
    <Layout>
      {chatListData.map((chat) => (
        <Item key={chat.chatroomId} onClick={() => onClickChat({ chatroomId: chat.chatroomId, roomName: chat.name })}>
          <Img src={`${BASE_URL}${chat.imgUrl}`} alt="avatar" />
          <Details>
            <div>
              <Title>{chat.name}</Title>
              <LastMessage>{chat.lastMessage || '첫 번째 메시지를 남겨주세요 ✏️'}</LastMessage>
            </div>
            <LastDate>{convertDate(chat.lastMessageDate) || ''}</LastDate>
          </Details>
        </Item>
      ))}
    </Layout>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 58px;
  height: 50px;
  border-radius: 28px;
  overflow: hidden;
  margin-right: 16px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
`;

const LastDate = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const LastMessage = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

export default Chats;
