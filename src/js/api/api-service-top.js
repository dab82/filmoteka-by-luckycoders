import axios from 'axios';
import { API_KEY } from '../common/keys';

const BASE_URL_TOP = `https://api.themoviedb.org/3/movie/top_rated`;

export async function fetchTopMovies(page) {
  const response = await axios.get(`${BASE_URL_TOP}?api_key=${API_KEY}&page=${page}`);
  return response.data;
}
