import { tripInstance } from '../instances';
import { MovieResponse, MusicResponse, NewsResponse, WeatherResponse } from './types';

export const tripApi = {
  getNews: async (calendarId: string) => {
    const response = await tripInstance.get<NewsResponse>(`/search/${calendarId}/news`);
    return response.data;
  },
  getWeather: async (calendarId: string) => {
    const response = await tripInstance.get<WeatherResponse>(`/weather/${calendarId}`);
    return response.data;
  },
  getMusic: async (calendarId: string) => {
    const response = await tripInstance.get<MusicResponse>(`/search/${calendarId}/songs`);
    return response.data;
  },
  getMovie: async (calendarId: string) => {
    const response = await tripInstance.get<MovieResponse>(`/search/${calendarId}/movies`);
    return response.data;
  },
};
