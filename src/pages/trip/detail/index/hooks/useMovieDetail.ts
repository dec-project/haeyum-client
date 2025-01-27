import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

const useMovieDetail = (calendarId: string, movieId: string) => {
  const query = useQuery({
    queryKey: ['movies', calendarId, movieId],
    queryFn: () => tripApi.getMovieDetail(calendarId, movieId),
    enabled: !!calendarId && !!movieId,
  });

  return { ...query };
};

export default useMovieDetail;
