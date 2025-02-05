import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useMusic = (calendarId: string) => {
  return useSuspenseQuery({
    queryKey: ['songs', calendarId],
    queryFn: () => tripApi.getMusic(calendarId),
  });
};
