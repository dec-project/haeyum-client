import { profileApi } from '@/common/apis/profile';
import { ProfileEditList } from '@/common/apis/profile/types';
import { useMutation } from '@tanstack/react-query';

const useProfileEdit = () => {
  const mutate = useMutation({
    mutationFn: (profile: ProfileEditList) => profileApi.putProfile(profile),
    onError: (error) => {
      if (error.message === '닉네임은 최소 2자 이상, 최대 10자 이하이여야 합니다.') {
        alert('닉네임은 2~10자 이내여야 합니다.');
      }
    },
    onSuccess: () => {
      alert('프로필 수정이 완료되었습니다.');
    },
  });

  return { ...mutate };
};

export default useProfileEdit;
