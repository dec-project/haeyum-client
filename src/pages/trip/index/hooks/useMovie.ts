import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useMovie = (calendarId: string) => {
  return useSuspenseQuery({
    queryKey: ['movies', calendarId],
    queryFn: () => tripApi.getMovie(calendarId),
  });
};
