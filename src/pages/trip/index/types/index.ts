export interface musicSummary {
  songId: number;
  title: string;
  artists: string;
  ranking: number;
  imgUrl: string;
}

export interface movieSummary {
  movieId: number;
  title: string;
  ranking: number;
  img: string;
}

export interface newsSummary {
  title: string;
  content: string;
  url: string;
  category: string;
}
