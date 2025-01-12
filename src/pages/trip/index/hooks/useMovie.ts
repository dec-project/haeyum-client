import { useQuery } from '@tanstack/react-query';
import { tripApi } from '@/common/apis/trip';

const useMovie = (calendarId: string) => {
  const query = useQuery({
    queryKey: ['movies', calendarId],
    queryFn: () => tripApi.getMovie(calendarId),
    enabled: !!calendarId,
  });

  return { ...query };
};

export default useMovie;
