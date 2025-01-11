import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';
import { SearchRankingListResponse } from '../types';

const useSearchRanking = () => {
  const query = useQuery<SearchRankingListResponse>({
    queryKey: ['rankingSearch'],
    queryFn: () => api.get(`/ranking/search`),
    enabled: true,
  });

  return { ...query };
};

export default useSearchRanking;
