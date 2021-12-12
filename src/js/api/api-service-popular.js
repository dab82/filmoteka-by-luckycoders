import axios from 'axios';
import { API_KEY } from '../common/keys';
import { showLoader, hideLoader } from '../helpers/preloader';

const BASE_URL_POPULAR = 'https://api.themoviedb.org/3/trending/movie/day';

export async function fetchPopularMovies(page) {
  showLoader();
  const response = await axios.get(`${BASE_URL_POPULAR}?api_key=${API_KEY}&page=${page}`);
  hideLoader();
  return response.data;
}
