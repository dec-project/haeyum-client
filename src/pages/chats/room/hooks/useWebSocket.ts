import { useRef, useEffect } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface WebSocketProps {
  roomId: string;
  accessToken: unknown;
  onMessage: (message: any) => void;
}

const useWebSocket = ({ roomId, accessToken, onMessage }: WebSocketProps) => {
  const client = useRef<CompatClient | null>(null);

  useEffect(() => {
    const connect = () => {
      const socket = new SockJS(`${BASE_URL}/ws`);
      client.current = Stomp.over(socket);
      client.current.debug = () => {};

      client.current.connect(
        { Authorization: `Bearer ${accessToken}` },
        () => {
          client.current?.subscribe(
            `/sub/chatroom/${roomId}`,
            (message) => {
              const newMessage = JSON.parse(message.body);
              onMessage(newMessage);
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
  }, [roomId, accessToken, onMessage]);

  return client;
};

export { useWebSocket };
