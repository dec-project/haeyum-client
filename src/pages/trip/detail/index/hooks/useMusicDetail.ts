import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

const useMusicDetail = (calendarId: string, musicId: string) => {
  const query = useQuery({
    queryKey: ['music', calendarId, musicId],
    queryFn: () => api.get(`/search/${calendarId}/songs/${musicId}`),
    enabled: !!calendarId && !!musicId,
  });

  return { ...query };
};

export default useMusicDetail;
