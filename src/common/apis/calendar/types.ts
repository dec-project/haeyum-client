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

export interface SearchResult {
  count: number;
  itemList: TripCard[];
  currentPage: number;
  totalPages: number;
  last: boolean;
}

export interface TripCard {
  calendarId: string;
  calendarName: string;
  img: string;
  viewCount: number;
  favoriteCount: number;
}
