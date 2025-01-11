export interface NewsSummary {
  title: string;
  content: string;
  url: string;
  category: string;
}

export interface MusicSummary {
  songId: number;
  title: string;
  artists: string;
  ranking: number;
  imgUrl: string;
}

export interface MovieSummary {
  movieId: number;
  title: string;
  ranking: number;
  img: string;
}

export interface NewsResponse {
  itemList: NewsSummary[];
}

export interface MovieResponse {
  itemList: MovieSummary[];
}

export interface MusicResponse {
  songSummaries: MusicSummary[];
}

export interface WeatherResponse {
  weather: string;
  img: string;
}
