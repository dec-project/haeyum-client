import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useWeather = (calendarId?: string) => {
  const query = useQuery({
    queryKey: ['weather', calendarId],
    queryFn: () => api.get(`/weather/${calendarId}`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useWeather;
