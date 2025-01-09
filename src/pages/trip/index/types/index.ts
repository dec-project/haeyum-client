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

export interface NewsSummary {
  title: string;
  content: string;
  url: string;
  category: string;
}
