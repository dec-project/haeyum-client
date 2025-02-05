import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useWeather = (calendarId: string) => {
  return useSuspenseQuery({
    queryKey: ['weather', calendarId],
    queryFn: () => tripApi.getWeather(calendarId),
  });
};
