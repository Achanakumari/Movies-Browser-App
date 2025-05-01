const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
console.log("OMDb API Key:", API_KEY);
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await response.json();
  return data;
};
