import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

const useNews = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['news', calendarId],
    queryFn: () => tripApi.getNews(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useNews;
