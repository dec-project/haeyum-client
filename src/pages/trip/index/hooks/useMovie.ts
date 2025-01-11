import { useQuery } from '@tanstack/react-query';
import searchApi from '@/common/apis/search';

const useMovie = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['movies', calendarId],
    queryFn: () => searchApi.getMovie(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMovie;
