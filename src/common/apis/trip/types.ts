export interface NewsResponse {
  itemList: NewsSummary[];
}

export interface NewsSummary {
  title: string;
  content: string;
  url: string;
  img: string;
}

export interface WeatherResponse {
  weather: string;
  img: string;
}

export interface MusicResponse {
  songSummaries: MusicSummary[];
}

export interface MusicSummary {
  songId: number;
  title: string;
  artists: string;
  ranking: number;
  imgUrl: string;
}

export interface MovieResponse {
  itemList: MovieSummary[];
}

export interface MovieSummary {
  movieId: number;
  title: string;
  ranking: number;
  img: string;
}

export interface MovieDetail {
  title: string;
  content: string;
  releaseDate: string;
  youtubeAddr: string;
}

export interface MusicDetail {
  songId: number;
  title: string;
  artists: string;
  releaseDate: string;
  genre: string;
  lyrics: string;
  youtubeAddr: string;
}
