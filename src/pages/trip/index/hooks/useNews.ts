import { useQuery } from '@tanstack/react-query';
import searchApi from '@/common/apis/search';

const useNews = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['news', calendarId],
    queryFn: () => searchApi.getNews(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useNews;
