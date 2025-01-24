import { privateApiInstance } from '../instances';
import { ProfileFavoriteListResponse, ProfileList } from './types';

export const profileApi = {
  getProfile: async () => {
    const response = await privateApiInstance.get<ProfileList>('/member/profile');
    return response.data;
  },
  getProfileFavorite: async () => {
    const response = await privateApiInstance.get<ProfileFavoriteListResponse>('/member/profile/favorite');
    return response.data;
  },
};
