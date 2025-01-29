import { publicApiInstance, privateApiInstance } from '../instances';
import { ChatListResponse, ChatMessageResponse } from './types';

export const chatApi = {
  getChatList: async () => {
    const response = await publicApiInstance.get<ChatListResponse>('/chatroom');
    return response.data;
  },
  getChatMessages: async (roomId: number) => {
    const response = await privateApiInstance.get<ChatMessageResponse>(`/chat/${roomId}`);
    return response.data;
  },
};
