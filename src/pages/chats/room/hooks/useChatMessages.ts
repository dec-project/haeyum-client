import { chatApi } from '@/common/apis/chatting';
import { useQuery } from '@tanstack/react-query';

const useChatMessages = (chatroomId: string) => {
  const query = useQuery({
    queryKey: ['chatMessages', chatroomId],
    queryFn: () => chatApi.getChatMessages(Number(chatroomId)),
  });

  return { ...query };
};

export default useChatMessages;
