import React from 'react';
import styled from 'styled-components';

interface ChatMessageItemProps {
  sender: string;
  content: string;
  isUser: boolean;
}

const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ sender, content, isUser }) => {
  return (
    <Content isUser={isUser}>
      <Sender>{sender}</Sender>
      <MessageBox isUser={isUser}>
        <MessageContent>{content}</MessageContent>
      </MessageBox>
    </Content>
  );
};

const Content = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isUser'].includes(prop),
})<{ isUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  margin-left: ${(props) => (props.isUser ? '0' : '12px')};
  margin-right: ${(props) => (props.isUser ? '12px' : '0')};
`;

const Sender = styled.span`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.primary};
`;

const MessageBox = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isUser'].includes(prop),
})<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? props.theme.colors.orange400 : props.theme.colors.orange200)};
  color: ${({ theme }) => theme.themeColors.textPrimary};
  padding: 12px 16px;
  border-radius: 4px;
  width: fit-content;
`;

const MessageContent = styled.span`
  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.themeColors.textPrimary};
`;

export default ChatMessageItem;
