import axios from 'axios';
import { API_KEY } from '../common/keys';
import { showLoader, hideLoader } from '../helpers/preloader';

const BASE_URL_TOP = `https://api.themoviedb.org/3/movie/top_rated`;

export async function fetchTopMovies(page) {
  showLoader();
  const response = await axios.get(`${BASE_URL_TOP}?api_key=${API_KEY}&page=${page}`);
  hideLoader();
  return response.data;
}
