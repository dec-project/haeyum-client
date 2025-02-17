import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useNews = (calendarId: string) => {
  return useSuspenseQuery({
    queryKey: ['news', calendarId],
    queryFn: () => tripApi.getNews(calendarId),
  });
};
