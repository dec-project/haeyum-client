import { profileApi } from '@/common/apis/profile';
import { useQuery } from '@tanstack/react-query';

const useProfile = () => {
  const query = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileApi.getProfile(),
  });

  return { ...query };
};

export default useProfile;
