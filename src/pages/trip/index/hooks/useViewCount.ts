import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useViewCount = (calendarId: string) => {
  return useSuspenseQuery({
    queryKey: ['view', calendarId],
    queryFn: () => tripApi.getView(calendarId),
  });
};
