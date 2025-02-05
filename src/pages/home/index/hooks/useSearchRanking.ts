import { useQuery } from '@tanstack/react-query';
import { rankingApi } from '@/common/apis/ranking';

export const useSearchRanking = () => {
  return useQuery({
    queryKey: ['rankingSearch'],
    queryFn: rankingApi.getSearchRanking,
    enabled: true,
  });
};
