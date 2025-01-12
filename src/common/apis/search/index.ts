import { searchInstance } from '../instances';
import { SearchParams, SearchResponse } from './types';

export const searchApi = {
  postSearchResult: (params: SearchParams) =>
    searchInstance.post<SearchResponse>('', params).then((response) => response.data),
};
