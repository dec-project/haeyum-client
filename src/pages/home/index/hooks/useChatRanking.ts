import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useChatRanking = () => {
  const query = useQuery({
    queryKey: ['rankingSearch'],
    queryFn: () => api.get(`/ranking/chatroom`),
    enabled: true,
  });

  return { ...query };
};

export default useChatRanking;
