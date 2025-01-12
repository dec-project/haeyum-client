import { rankingInstance } from '../instances';
import { KeywordRankingResponse } from './type';

export const rankingApi = {
  getSearchRanking: async () => {
    const response = await rankingInstance.get<KeywordRankingResponse>(`/search`);
    return response.data;
  },
};
