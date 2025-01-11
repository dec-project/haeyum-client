import { calendarInstance } from '../instances';
import { SearchParams, SearchResponse } from './types';

export const calendarApi = {
  postSearchResult: (params: SearchParams) =>
    calendarInstance.post<SearchResponse>('', params).then((response) => response.data),
};
