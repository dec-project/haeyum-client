import { useQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';
import { NewsResponse } from '../types';

const useNews = (calendarId?: string) => {
  const query = useQuery<NewsResponse>({
    queryKey: ['news', calendarId],
    queryFn: () => api.get(`/search/${calendarId}/news`),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useNews;
