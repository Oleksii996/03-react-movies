import axios from 'axios';
import { type Movie } from '../types/movie';

interface AxiosMoviesResponse {
  results: Movie[];
}
const myKey = import.meta.env.VITE_TMDB_KEY;

export default async function fetchMovies(
  query: string
): Promise<AxiosMoviesResponse> {
  const response = await axios.get<AxiosMoviesResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxYTM3YWI3ZjQwODMwMWEwZmE5MWEwODg2NTM1ZSIsIm5iZiI6MTc3MTYxMjI4OS40NTI5OTk4LCJzdWIiOiI2OTk4YTg4MTFkNTBmMmIwMjkzMDI5OWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1KMXOKg5IJkeCF-OJslu8e1nas_4vkLRLZo4lCFB7v0`,
      },
      params: {
        query,
      },
    }
  );
  return response.data;
}