import { searchInstance } from '../instances';
import { SearchParams, SearchResponse } from './types';

export const searchApi = {
  postSearchResult: async (params: SearchParams) => {
    const response = await searchInstance.post<SearchResponse>('', params);
    return response.data;
  },
};
