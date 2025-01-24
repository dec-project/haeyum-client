import { formDataApiInstance, privateApiInstance } from '../instances';
import { ProfileFavoriteListResponse, ProfileList } from './types';

export const profileApi = {
  getProfile: async () => {
    const response = await privateApiInstance.get<ProfileList>('/member/profile');
    return response.data;
  },
  putProfile: async (profile: ProfileList) => {
    const profileFormData = new FormData();
    profileFormData.append('profileImg', profile.profileImg);
    profileFormData.append('nickname', profile.nickname);
    const response = await formDataApiInstance.put<ProfileList>('/member/profile', profileFormData);
    return response.data;
  },
  getProfileFavorite: async () => {
    const response = await privateApiInstance.get<ProfileFavoriteListResponse>('/member/favorite');
    return response.data;
  },
};
