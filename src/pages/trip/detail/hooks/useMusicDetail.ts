import { useSuspenseQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

export const useMusicDetail = (calendarId: string, musicId: string) => {
  return useSuspenseQuery({
    queryKey: ['music', calendarId, musicId],
    queryFn: () => tripApi.getMusicDetail(calendarId, musicId),
  });
};
