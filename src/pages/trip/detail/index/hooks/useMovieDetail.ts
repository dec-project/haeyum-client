import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useMovieDetail = (calendarId: string, movieId: string) => {
  return useSuspenseQuery({
    queryKey: ['movies', calendarId, movieId],
    queryFn: () => tripApi.getMovieDetail(calendarId, movieId),
  });
};
