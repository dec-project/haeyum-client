import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useSearchRanking = () => {
  const query = useQuery({
    queryKey: ['rankingSearch'],
    queryFn: () => api.get(`/ranking/search`),
    enabled: true,
  });

  return { ...query };
};

export default useSearchRanking;
