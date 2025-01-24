import { profileApi } from '@/common/apis/profile';
import { useQuery } from '@tanstack/react-query';

const useProfileFavorite = () => {
  const query = useQuery({
    queryKey: ['profileFavorite'],
    queryFn: () => profileApi.getProfileFavorite(),
  });

  return { ...query };
};

export default useProfileFavorite;
