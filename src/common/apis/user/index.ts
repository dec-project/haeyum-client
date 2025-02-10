import { privateApiInstance } from '../instances';
import { TokenResponse } from './\btypes';

export const userApi = {
  postAuthCode: async (code: string) => {
    const response = await privateApiInstance.post<TokenResponse>('/oauth/kakao/login', { code });
    return response.data;
  },
};
