import { calendarApi } from '@/common/apis/calendar';
import { SearchParams } from '@/common/apis/calendar/types';
import { useInfiniteQuery } from '@tanstack/react-query';

const useSearch = ({ startDate, endDate, page = 0, size = 10 }: SearchParams) => {
  const getSearchItems = async ({ pageParam = 0 }: { pageParam: number }) => {
    return await calendarApi.postSearchResult({ startDate, endDate, page: pageParam, size });
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading } = useInfiniteQuery({
    queryKey: ['searchData', startDate, endDate, size],
    queryFn: getSearchItems,
    initialPageParam: page,
    getNextPageParam: (lastPage) => (lastPage.last ? undefined : lastPage.currentPage + 1),
    select: (data) => {
      const items = data.pages.flatMap((page) => page.itemList);
      const count = data.pages[0] ? data.pages[0].count : 0;
      const pageParams = data.pageParams;
      return {
        items: items,
        count: count,
        pageParams: pageParams,
      };
    },
    enabled: !!startDate && !!endDate,
  });

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error, isLoading };
};

export default useSearch;
