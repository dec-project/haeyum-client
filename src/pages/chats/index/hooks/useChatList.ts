import { chatApi } from '@/common/apis/chatting';
import { useQuery } from '@tanstack/react-query';

const useChatList = () => {
  const query = useQuery({
    queryKey: ['chatList'],
    queryFn: () => chatApi.getChatList(),
  });

  return { ...query };
};

export default useChatList;
