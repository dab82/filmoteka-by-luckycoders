import axios from 'axios';
import { API_KEY } from '../common/keys';

const BASE_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming`;



export async function fetchUpcomingMovies(page) {
  const response = await axios.get(`${BASE_URL_UPCOMING}?api_key=${API_KEY}&page=${page}`);
  return response.data;
}
