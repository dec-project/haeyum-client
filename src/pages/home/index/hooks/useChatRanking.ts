import { useQuery } from '@tanstack/react-query';
import { rankingApi } from '@/common/apis/ranking';

export const useChatRanking = () => {
  return useQuery({
    queryKey: ['rankingChat'],
    queryFn: rankingApi.getChatRanking,
    enabled: true,
  });
};
