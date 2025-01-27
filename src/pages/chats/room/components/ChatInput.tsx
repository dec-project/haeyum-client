import React from 'react';
import styled from 'styled-components';
import ChatSubmit from '@/common/assets/icon/icon-chat-submit.svg?react';

interface ChatInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

const ChatInput = ({ message, onMessageChange, onSendMessage }: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="대화를 입력해주세요."
        onKeyPress={handleKeyPress}
      />
      <SendButton onClick={onSendMessage}>
        <Icon as={ChatSubmit} />
      </SendButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange200};
  border-radius: 5px;
  margin-left: 12px;
`;

const InputField = styled.input`
  flex: 1 0 0;
  border: none;
  align-items: center;
  padding: 8px 8px 8px 16px;
  color: ${({ theme }) => theme.colors.orange500};
  &::placeholder {
    color: ${({ theme }) => theme.colors.orange500};
  }
`;

const SendButton = styled.button`
  color: ${({ theme }) => theme.colors.orange500};
  border: none;
  padding: 8px 8px 8px 0;
  cursor: pointer;
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  margin: 6px;
`;

export default ChatInput;
