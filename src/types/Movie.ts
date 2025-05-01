export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Genre?: string;
    Director?: string;
    Plot?: string;
    Ratings?: { Source: string; Value: string }[];
  }
  