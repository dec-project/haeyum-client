import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

const useMusic = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['songs', calendarId],
    queryFn: () => tripApi.getMusic(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMusic;
