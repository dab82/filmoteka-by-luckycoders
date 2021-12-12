import axios from 'axios';
import { API_KEY } from '../common/keys';
import { showLoader, hideLoader } from '../helpers/preloader';

const BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

export async function fetchSearchMovies(query, page) {
  showLoader();
  const response = await axios.get(
    `${BASE_URL_SEARCH}?api_key=${API_KEY}&language=en-US&include_adult=false`,
    {
      params: {
        query: query.length ? query : null,
        page,
      },
    },
  );
  hideLoader();
  return response.data;
}
