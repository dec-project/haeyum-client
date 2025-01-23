import { publicApiInstance } from '../instances';
import { ChatListResponse } from './types';

export const chatApi = {
  getChatList: async () => {
    const response = await publicApiInstance.get<ChatListResponse>('/chatroom');
    return response.data;
  },
  getChatMessages: async (roomId: number) => {
    const response = await publicApiInstance.get(`/chat/${roomId}`);
    return response.data;
  },
};
