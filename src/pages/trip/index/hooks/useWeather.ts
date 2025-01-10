import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';
import { WeatherResponse } from '../types';

const useWeather = (calendarId?: string) => {
  const query = useQuery<WeatherResponse>({
    queryKey: ['weather', calendarId],
    queryFn: () => api.get(`/weather/${calendarId}`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useWeather;
