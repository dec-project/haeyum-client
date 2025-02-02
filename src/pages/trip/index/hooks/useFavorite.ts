import { tripApi } from '@/common/apis/trip';
import { useAuthStore } from '@/common/stores/useAuthStore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useFavorite = (calendarId: string) => {
  const { isLogin } = useAuthStore.getState();

  const query = useQuery({
    queryKey: ['favorite', calendarId],
    queryFn: () => tripApi.getFavorite(calendarId),
    enabled: !!calendarId && isLogin(),
    initialData: { isFavorite: false },
  });

  return { ...query };
};

export const usePutFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (calendarId: string) => tripApi.putFavorite(calendarId),
    onSuccess: (_data, calendarId) => {
      queryClient.invalidateQueries({ queryKey: ['favorite', calendarId] });
    },
  });
};
