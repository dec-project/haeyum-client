import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useSearch from './useSearch';

const useResult = (startDate: string, endDate: string) => {
  const { ref, inView } = useInView({ threshold: 1.0 });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading } = useSearch({
    startDate,
    endDate,
    page: 0,
    size: 10,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      const timeout = setTimeout(() => {
        fetchNextPage();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return { ref, data, hasNextPage, isFetchingNextPage, isError, error, isLoading };
};

export default useResult;
