import { rankingInstance } from '../instances';
import { SearchRanking } from './type';

const rankingApi = {
  getSearchRanking: () => rankingInstance.get<SearchRanking>(`/search`).then((response) => response.data),
};

export default rankingApi;
