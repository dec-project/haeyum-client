import {
  FavoriteResponse,
  MovieDetail,
  MovieResponse,
  MusicDetail,
  MusicResponse,
  NewsResponse,
  WeatherResponse,
} from './types';
import { privateApiInstance, publicApiInstance } from '../instances';

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
    const response = await publicApiInstance.get<MovieDetail>(`/search/${calendarId}/movies/${movieId}`);
    return response.data;
  },
  getMusicDetail: async (calendarId: string, musicId: string) => {
    const response = await publicApiInstance.get<MusicDetail>(`/search/${calendarId}/songs/${musicId}`);
    return response.data;
  },
  toggleFavorite: async (calendarId: string) => {
    const response = await privateApiInstance.put<FavoriteResponse>(`/favorite/${calendarId}`);
    return response.data;
  },
};
