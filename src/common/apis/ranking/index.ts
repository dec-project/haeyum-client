import { rankingInstance } from '../instances';
import { KeywordRankingResponse } from './type';

const rankingApi = {
  getSearchRanking: rankingInstance.get<KeywordRankingResponse>(`/search`).then((response) => response.data),
};

export default rankingApi;
