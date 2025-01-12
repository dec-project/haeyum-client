import { rankingInstance } from '../instances';
import { SearchRankingResponse } from './type';

const rankingApi = {
  getSearchRanking: rankingInstance.get<SearchRankingResponse>(`/search`).then((response) => response.data),
};

export default rankingApi;
