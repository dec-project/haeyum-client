import { chatApi } from '@/common/apis/chatting';
import { useQuery } from '@tanstack/react-query';

export const useChatMessages = (chatroomId: string) => {
  return useQuery({
    queryKey: ['chatMessages', chatroomId],
    queryFn: () => chatApi.getChatMessages(Number(chatroomId)),
  });
};
