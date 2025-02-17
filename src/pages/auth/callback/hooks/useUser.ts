import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/common/stores/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { userApi } from '@/common/apis/user';

export const useUser = () => {
  const { setTokens } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (code: string) => userApi.postAuthCode(code),
    onSuccess: (data) => {
      const { accessToken, refreshToken, socialSub: userId } = data;

      if (!accessToken || !refreshToken || !userId) {
        throw new Error('토큰 값을 확인해주세요.');
      }

      setTokens(accessToken, refreshToken, userId);
      navigate('/');
    },
    onError: () => {
      navigate('/login');
    },
  });
};
