import { publicApiInstance } from '../instances';
import { MovieResponse, MusicResponse, NewsResponse, WeatherResponse } from './types';

export const tripApi = {
  getNews: async (calendarId: string) => {
    const response = await publicApiInstance.get<NewsResponse>(`/search/${calendarId}/news`);
    return response.data;
  },
  getWeather: async (calendarId: string) => {
    const response = await publicApiInstance.get<WeatherResponse>(`/search/weather/${calendarId}`);
    return response.data;
  },
  getMusic: async (calendarId: string) => {
    const response = await publicApiInstance.get<MusicResponse>(`/search/${calendarId}/songs`);
    return response.data;
  },
  getMovie: async (calendarId: string) => {
    const response = await publicApiInstance.get<MovieResponse>(`/search/${calendarId}/movies`);
    return response.data;
  },
  getMovieDetail: async (calendarId: string, movieId: string) => {
    const response = await publicApiInstance.get<any>(`/search/${calendarId}/movies/${movieId}`);
    return response.data;
  },
  getMusicDetail: async (calendarId: string, musicId: string) => {
    const response = await publicApiInstance.get<any>(`/search/${calendarId}/songs/${musicId}`);
    return response.data;
  },
};
