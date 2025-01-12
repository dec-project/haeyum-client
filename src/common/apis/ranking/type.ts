export interface KeywordRankingResponse {
  searches: KeywordRanking[];
}

export interface KeywordRanking {
  calendarId: number;
  calendarDate: number;
  calendarName: string;
  viewCount: number;
  favoriteCount: number;
  imgUrl: string;
}
