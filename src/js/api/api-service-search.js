import axios from 'axios';
import { API_KEY } from '../common/keys';

const BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

export async function fetchSearchMovies(query, page) {
  const response = await axios.get(
    `${BASE_URL_SEARCH}?api_key=${API_KEY}&language=en-US&include_adult=false`,
    {
      params: {
        query: query.length ? query : null,
        page,
      },
    },
  );
  return response.data;
}
