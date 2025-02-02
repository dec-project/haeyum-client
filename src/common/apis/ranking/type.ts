export interface KeywordRankingResponse {
  searches: KeywordRanking[];
}

export interface KeywordRanking {
  chatroomId: number;
  calendarId: number;
  calendarDate: number;
  calendarName: string;
  viewCount: number;
  favoriteCount: number;
  imgUrl: string;
}

export interface ChatRanking {
  chatroomId: number;
  name: string;
  lastMessageDate: string;
  imgUrl: string;
}

export type ChatRankingResponse = ChatRanking[];
