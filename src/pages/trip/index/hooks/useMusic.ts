import { useQuery } from '@tanstack/react-query';
import searchApi from '@/common/apis/search';

const useMusic = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['songs', calendarId],
    queryFn: () => searchApi.getMusic(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMusic;
