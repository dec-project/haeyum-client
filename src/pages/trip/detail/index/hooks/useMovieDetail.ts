import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useMovieDetail = (calendarId: string, movieId: string) => {
  const query = useQuery({
    queryKey: ['movies', calendarId, movieId],
    queryFn: () => api.get(`/search/${calendarId}/movies/${movieId}`),
    enabled: !!calendarId && !!movieId,
  });

  return { ...query };
};

export default useMovieDetail;
