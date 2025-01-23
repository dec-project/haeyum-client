import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useViewCount = (calendarId: string) => {
  return useQuery({
    queryKey: ['view', calendarId],
    queryFn: () => tripApi.getView(calendarId),
    enabled: !!calendarId,
  });
};
