import { userApi } from '@/common/apis/user';
import { useMutation } from '@tanstack/react-query';

export const useUser = () => {
  return useMutation({
    mutationFn: (code: string) => userApi.postAuthCode(code),
  });
};
