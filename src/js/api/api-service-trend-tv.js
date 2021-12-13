import axios from 'axios';
import { API_KEY } from '../common/keys';

const BASE_URL_TRENDING_TV = `https://api.themoviedb.org/3/trending/tv/day`;


export async function fetchTrendingTvMovies(page) {
  const response = await axios.get(`${BASE_URL_TRENDING_TV}?api_key=${API_KEY}&page=${page}`);
  return response.data;
}
