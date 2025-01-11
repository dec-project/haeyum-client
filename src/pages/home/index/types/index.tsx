export interface SearchRankingListResponse {
  searches: SearchRankingList[];
}

export interface SearchRankingList {
  calendarId: number;
  calendarDate: number;
  calendarName: string;
  viewCount: number;
  favoriteCount: number;
  img: string;
}
