import axios from "axios";
import type { MovieSearchResponse } from "../types/movieSearchResponse";

const API_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string
): Promise<MovieSearchResponse> => {
  const response = await axios.get<MovieSearchResponse>(API_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data;
};
