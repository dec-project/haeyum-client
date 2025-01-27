import { publicApiInstance } from '../instances';
import { SearchParams, SearchResponse } from './types';

export const searchApi = {
  postSearchResult: async (params: SearchParams) => {
    const response = await publicApiInstance.post<SearchResponse>('calendar', params);
    return response.data;
  },
};
