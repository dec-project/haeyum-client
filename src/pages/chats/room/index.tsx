import { useNavigate, useParams } from 'react-router-dom';
import useChatMessages from './hooks/useChatMessages';
import LoadingSpinner from '@/common/components/spinner';
import { useEffect, useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import styled from 'styled-components';
import Container from '@/common/components/layout/Container';
import ChatMessageItem from './components/ChatContent';
import ChatInput from './components/ChatInput';
import SockJS from 'sockjs-client';
import Layout from './components/Layout';
import useLocalStorage from '@/common/hooks/useLocalStorage';
import { ChatMessageResponse } from '@/common/apis/chatting/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ChatRoom = () => {
  const { chatroomId, roomName } = useParams<{ chatroomId: string; roomName: string }>();
  const accessToken = useLocalStorage('accessToken');
  const userId = useLocalStorage('userId');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const {
    data: chatMessageData,
    isLoading: isChatMessageLoading,
    isError: isChatMessageError,
    error: chatMessageError,
  } = useChatMessages(chatroomId || '');
  const [chatHistory, setChatHistory] = useState<ChatMessageResponse>([]);
  const client = useRef<CompatClient | null>(null);

  useEffect(() => {
    setChatHistory(chatMessageData || []);
  }, [chatMessageData]);

  // TODO : 토큰 재발급 로직 추가해야 함 (토큰 만료시)
  useEffect(() => {
    const connect = () => {
      const socket = new SockJS(`${BASE_URL}/ws`);

      client.current = Stomp.over(socket);

      client.current.debug = () => {};

      client.current.connect(
        { Authorization: `Bearer ${accessToken}` },
        () => {
          client.current?.subscribe(
            `/sub/chatroom/${chatroomId}`,
            (message) => {
              const newMessage = JSON.parse(message.body);
              setChatHistory((prev) => [...prev, newMessage]);
            },
            { Authorization: `Bearer ${accessToken}` },
          );
        },
        (error: any) => {
          console.error('WebSocket connection error:', error);
        },
      );
    };

    connect();

    return () => {
      client.current?.disconnect();
    };
  }, [chatroomId]);

  const handleSendMessage = () => {
    if (!accessToken || !client.current?.connected) {
      alert('로그인 후 이용해주세요.');
      navigate('/login');
      return;
    }
    if (client.current && message.trim()) {
      const chatMessage = { chatroomId: chatroomId, content: message };
      client.current.send('/pub/message', { Authorization: `Bearer ${accessToken}` }, JSON.stringify(chatMessage));
      setMessage('');
    }
  };

  if (isChatMessageLoading) {
    return <LoadingSpinner />;
  }

  if (isChatMessageError) {
    const errorMessage = chatMessageError?.message || '채팅 데이터를 가져오는 중 문제가 발생했습니다.';
    return (
      <Container>
        <span>{errorMessage}</span>
      </Container>
    );
  }

  return (
    <Layout roomName={roomName}>
      {chatHistory.length > 0 ? (
        chatHistory.map((data, index) => {
          const currentDate = data.date;
          const previousDate = index > 0 ? chatHistory[index - 1].date : null;
          return (
            <div key={`${data.chatroomId}-${index}`}>
              {currentDate !== previousDate && <DateLabel>{currentDate}</DateLabel>}
              <ContentWrapper isUser={data.senderId === userId}>
                <Img src={`${BASE_URL}${data.profileImg}`} alt="messageIcon" />
                <ChatMessageItem sender={data.senderName} content={data.content} isUser={data.senderId === userId} />
              </ContentWrapper>
            </div>
          );
        })
      ) : (
        <NoMessage>첫 번째 메시지를 남겨주세요 ✏️</NoMessage>
      )}
      <InputWrapper>
        <ChatInput message={message} onMessageChange={setMessage} onSendMessage={handleSendMessage} />
      </InputWrapper>
    </Layout>
  );
};

const NoMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: ${({ theme }) => theme.themeColors.primary};
  ${({ theme }) => theme.typography.title3.regular};
`;

const DateLabel = styled.div`
  text-align: center;
  margin: 16px 0;
  color: ${({ theme }) => theme.themeColors.textPrimary};
  ${({ theme }) => theme.typography.body1.medium};
`;

const ContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isUser'].includes(prop),
})<{ isUser: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isUser ? 'row-reverse' : 'row')};
  justify-content: flex-start;
  align-items: flex-end;
  margin: 16px 0;
`;

const InputWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: auto;
  right: auto;
  z-index: 100;
  display: flex;
  align-items: center;
  margin: 12px 0;
  width: 90%;
  max-width: var(--max-width);
  min-width: var(--min-width);
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export default ChatRoom;
