import { useInfiniteQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';

type Params = {
  startDate: string;
  endDate: string;
  page: number;
  size: number;
};

const useSearch = ({ startDate, endDate, page = 0, size = 10 }: Params) => {
  const getSearchItems = async ({ pageParam = page }: { pageParam: number }) => {
    try {
      const response = await api.post('/calendar', {
        startDate,
        endDate,
        page: pageParam,
        size,
      });
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data.message;
      throw new Error(errorMessage);
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading } = useInfiniteQuery({
    queryKey: ['searchData', startDate, endDate, size],
    queryFn: getSearchItems,
    initialPageParam: page,
    getNextPageParam: (lastPage) => (lastPage.last ? undefined : lastPage.currentPage + 1),
    select: (data) => ({
      items: data.pages.flatMap((page) => page.itemList),
      count: data.pages[0]?.count || 0,
      pageParams: data.pageParams,
    }),
    enabled: !!startDate && !!endDate,
  });

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading };
};

export default useSearch;
