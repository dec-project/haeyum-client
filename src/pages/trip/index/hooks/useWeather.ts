import { useQuery } from '@tanstack/react-query';
import searchApi from '@/common/apis/search';

const useWeather = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['weather', calendarId],
    queryFn: () => searchApi.getWeather(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useWeather;
