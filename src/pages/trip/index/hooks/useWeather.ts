import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

const useWeather = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['weather', calendarId],
    queryFn: () => tripApi.getWeather(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useWeather;
