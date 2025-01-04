import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useMusic = (calendarId?: string) => {
  const query = useQuery({
    queryKey: ['songs', calendarId],
    queryFn: () => api.get(`/search/${calendarId}/songs`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMusic;
