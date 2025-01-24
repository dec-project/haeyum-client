interface ProfileList {
  profileImg: string;
  nickname: string;
}

interface ProfileFavoriteList {
  calenderId: number;
  img: string;
  calenderName: string;
  isFavorite: boolean;
}

interface ProfileFavoriteListResponse {
  itemList: ProfileFavoriteList[];
}

interface ProfileEditList {
  nickname: string;
  profileImg: File | null;
}

export type { ProfileList, ProfileFavoriteList, ProfileFavoriteListResponse, ProfileEditList };
