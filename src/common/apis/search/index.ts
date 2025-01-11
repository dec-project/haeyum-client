import { searchInstance } from '../instances';
import { MovieResponse, MusicResponse, NewsResponse, WeatherResponse } from './types';

// TODO: weather api 주소 변경 후 수정
const searchApi = {
  getNews: (calendarId: string) =>
    searchInstance.get<NewsResponse>(`/search/${calendarId}/news`).then((response) => response.data),
  // searchInstance.get<NewsResponse>(`/${calendarId}/news`).then((response) => response.data),
  getWeather: (calendarId: string) =>
    searchInstance.get<WeatherResponse>(`/weather/${calendarId}`).then((response) => response.data),
  // searchInstance.get<WeatherResponse>(`/${calendarId}/weather`).then((response) => response.data),
  getMusic: (calendarId: string) =>
    searchInstance.get<MusicResponse>(`/search/${calendarId}/songs`).then((response) => response.data),
  // searchInstance.get<MusicResponse>(`/${calendarId}/songs`).then((response) => response.data),
  getMovie: (calendarId: string) =>
    searchInstance.get<MovieResponse>(`/search/${calendarId}/movies`).then((response) => response.data),
  // searchInstance.get<MovieResponse>(`/${calendarId}/movies`).then((response) => response.data),
};

export default searchApi;
