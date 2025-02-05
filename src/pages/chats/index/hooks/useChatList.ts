import { chatApi } from '@/common/apis/chatting';
import { useQuery } from '@tanstack/react-query';

export const useChatList = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: () => chatApi.getChatList(),
  });
};
