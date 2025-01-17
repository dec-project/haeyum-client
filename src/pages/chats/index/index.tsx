import LoadingSpinner from '@/common/components/spinner';
import useChatList from './hooks/useChatList';
import styled from 'styled-components';
import Layout from './components/Layout';
import { format } from 'date-fns';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Chats = () => {
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
  return (
    <Layout>
      <div>
        {chatListData.map((chat) => (
          <ChatItem key={chat.roomId}>
            <Img src={`${BASE_URL}${chat.imgUrl}`} alt="avatar" />
            <ChatDetails>
              <div>
                <ChatTitle>{chat.name}</ChatTitle>
                <ChatMessage>{chat.lastMessage || '첫 번째 메시지를 작성해주세요'}</ChatMessage>
              </div>
              <ChatDate>{chat.lastMessageDate || format(Date(), 'yyyy년 MM월 dd일')}</ChatDate>
            </ChatDetails>
          </ChatItem>
        ))}
      </div>
    </Layout>
  );
};

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px;
`;

const Img = styled.img`
  width: 58px;
  height: 50px;
  border-radius: 28px;
  overflow: hidden;
  margin-right: 16px;
`;

const ChatDetails = styled.div`
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

const ChatTitle = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
`;

const ChatDate = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const ChatMessage = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

export default Chats;
