import { useInfiniteQuery } from '@tanstack/react-query';
import api from '@/common/apis/api';
import { SearchParams, SearchResponse } from '../types';

const useSearch = ({ startDate, endDate, page = 0, size = 10 }: SearchParams) => {
  const getSearchItems = async ({ pageParam = page }: { pageParam: number }) => {
    try {
      const response = await api.post<SearchResponse>('/calendar', {
        startDate,
        endDate,
        page: pageParam,
        size,
      });
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data.message;
      throw new Error(errorMessage);
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading } = useInfiniteQuery<
    SearchResponse,
    Error
  >({
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
