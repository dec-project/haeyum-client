import { useQuery } from '@tanstack/react-query';
import { rankingApi } from '@/common/apis/ranking';

const useChatRanking = () => {
  const query = useQuery({
    queryKey: ['rankingChat'],
    queryFn: rankingApi.getChatRanking,
    enabled: true,
  });

  return { ...query };
};

export default useChatRanking;
