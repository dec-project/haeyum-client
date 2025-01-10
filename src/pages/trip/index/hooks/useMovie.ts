import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';
import { MovieResponse } from '../types';

const useMovie = (calendarId?: string) => {
  const query = useQuery<MovieResponse>({
    queryKey: ['movies', calendarId],
    queryFn: () => api.get(`/search/${calendarId}/movies`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMovie;
