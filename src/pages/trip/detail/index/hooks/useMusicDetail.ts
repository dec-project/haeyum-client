import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

const useMusicDetail = (calendarId: string, musicId: string) => {
  const query = useQuery({
    queryKey: ['music', calendarId, musicId],
    queryFn: () => tripApi.getMusicDetail(calendarId, musicId),
    enabled: !!calendarId && !!musicId,
  });

  return { ...query };
};

export default useMusicDetail;
