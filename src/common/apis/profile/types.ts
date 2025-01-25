interface ProfileList {
  profileImg: string;
  nickname: string;
}

interface ProfileFavoriteList {
  calendarId: number;
  img: string;
  calendarName: string;
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
