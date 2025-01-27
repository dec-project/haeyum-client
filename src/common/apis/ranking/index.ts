import { publicApiInstance } from '../instances';
import { ChatRankingResponse, KeywordRankingResponse } from './type';

export const rankingApi = {
  getSearchRanking: async () => {
    const response = await publicApiInstance.get<KeywordRankingResponse>(`ranking/search`);
    return response.data;
  },
  getChatRanking: async () => {
    const response = await publicApiInstance.get<ChatRankingResponse>(`ranking/chatroom`);
    return response.data;
  },
};
