import { formDataApiInstance, privateApiInstance } from '../instances';
import { ProfileEditList, ProfileFavoriteListResponse, ProfileList } from './types';

export const profileApi = {
  getProfile: async () => {
    const response = await privateApiInstance.get<ProfileList>('/member/profile');
    return response.data;
  },
  putProfile: async (profile: ProfileEditList) => {
    const profileFormData = new FormData();
    if (profile.profileImg) {
      profileFormData.append('profileImg', profile.profileImg);
    }
    profileFormData.append('nickname', profile.nickname);
    const response = await formDataApiInstance.put<ProfileEditList>('/member/profile', profileFormData);
    return response.data;
  },
  getProfileFavorite: async () => {
    const response = await privateApiInstance.get<ProfileFavoriteListResponse>('/member/favorite');
    return response.data;
  },
};
