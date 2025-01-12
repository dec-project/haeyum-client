import { rankingInstance } from '../instances';
import { KeywordRankingResponse } from './type';

const rankingApi = {
  getSearchRanking: async () => {
    const response = await rankingInstance.get<KeywordRankingResponse>(`/search`);
    return response.data;
  },
};

export default rankingApi;
