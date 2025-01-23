import { chatApi } from '@/common/apis/chatting';
import { useQuery } from '@tanstack/react-query';

const useChatMessages = (roomId: string) => {
  const query = useQuery({
    queryKey: ['chatMessages', roomId],
    queryFn: () => chatApi.getChatMessages(Number(roomId)),
  });

  return { ...query };
};

export default useChatMessages;
