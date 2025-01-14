import { publicApiInstance } from '../instances';
import { KeywordRankingResponse } from './type';

export const rankingApi = {
  getSearchRanking: async () => {
    const response = await publicApiInstance.get<KeywordRankingResponse>(`ranking/search`);
    return response.data;
  },
};
