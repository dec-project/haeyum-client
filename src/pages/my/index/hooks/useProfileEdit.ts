import { profileApi } from '@/common/apis/profile';
import { ProfileList } from '@/common/apis/profile/types';
import { useMutation } from '@tanstack/react-query';

const useProfileEdit = () => {
  const mutate = useMutation({
    mutationFn: (profile: ProfileList) => profileApi.putProfile(profile),
  });

  return { ...mutate };
};

export default useProfileEdit;
