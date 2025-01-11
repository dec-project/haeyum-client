export interface SearchRankingResponse {
  searches: SearchRanking[];
}

export interface SearchRanking {
  calendarId: number;
  calendarDate: number;
  calendarName: string;
  viewCount: number;
  favoriteCount: number;
  img: string;
}
