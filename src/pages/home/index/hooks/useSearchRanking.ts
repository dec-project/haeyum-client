import { useQuery } from '@tanstack/react-query';
import rankingApi from '@/common/apis/ranking';

const useSearchRanking = () => {
  const query = useQuery({
    queryKey: ['rankingSearch'],
    queryFn: () => rankingApi.getSearchRanking(),
    enabled: true,
  });

  return { ...query };
};

export default useSearchRanking;
