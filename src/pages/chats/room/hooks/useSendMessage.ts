import { CompatClient } from '@stomp/stompjs';

interface SendMessageProps {
  client: CompatClient | null;
  message: string;
  roomId: string;
  accessToken: unknown;
  resetMessage: () => void;
}

const useSendMessage = ({ client, message, roomId, accessToken, resetMessage }: SendMessageProps) => {
  if (client && message.trim()) {
    const chatMessage = { chatRoomId: roomId, content: message };
    client.send(`/pub/message`, { Authorization: `Bearer ${accessToken}` }, JSON.stringify(chatMessage));
    resetMessage();
  }
};

export { useSendMessage };
