import { genres } from './common/genres';
import { setDataToStorageForHome } from './popular-movies-render';
import { dataFormat } from './helpers/data-format.js';
import { renderListCard } from './helpers/render-list-card';
import { fetchSearchMovies } from './api-service-search';
import { debounce } from 'lodash';
import { refs } from './common/refs';

const DEBOUNCE_DELAY = 300;

let page = 1;
let searchQuery = '';

function onInput() {
  searchQuery = refs.searchForm.value;

  if (searchQuery.length) {
    fetchSearchMovies(searchQuery, page).then(res => {
      const formattedData = dataFormat(res.results, genres);
      renderListCard(formattedData);
      setDataToStorageForHome(page, formattedData);
    });
  }
}

refs.searchForm.addEventListener(
  'keydown',
  debounce(() => onInput(), DEBOUNCE_DELAY),
);
