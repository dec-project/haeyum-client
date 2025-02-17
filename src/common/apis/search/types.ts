export interface SearchParams {
  startDate: string;
  endDate: string;
  page?: number;
  size?: number;
}

export interface SearchResponse {
  count: number;
  itemList: TripCard[];
  currentPage: number;
  totalPages: number;
  last: boolean;
}

export interface TripCard {
  chatroomId: number;
  calendarDate: string;
  calendarId: string;
  calendarName: string;
  imgUrl: string;
  viewCount: number;
  favoriteCount: number;
}
