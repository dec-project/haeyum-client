import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useMovie = (calendarId?: string) => {
  const query = useQuery({
    queryKey: ['movies', calendarId],
    queryFn: () => api.get(`/search/${calendarId}/movies`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMovie;
