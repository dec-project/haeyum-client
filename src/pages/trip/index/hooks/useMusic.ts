import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';
import { MusicResponse } from '../types';

const useMusic = (calendarId?: string) => {
  const query = useQuery<MusicResponse>({
    queryKey: ['songs', calendarId],
    queryFn: () => api.get(`/search/${calendarId}/songs`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMusic;
