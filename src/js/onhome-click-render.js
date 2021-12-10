import { refs } from './common/refs';
import { STORAGE_HOME_KEY, STORAGE_MAIN_KEY } from './common/keys';
import { renderListCard } from './helpers/render-list-card';
import { paginationSettings } from './pagination';
import { HOME_SEARCH_TYPE } from './common/search-types';

refs.onLogo.addEventListener('click', renderCards);
refs.homeLink.addEventListener('click', renderCards);

function renderCards(e) {
  e.preventDefault();
  const storageData = JSON.parse(localStorage.getItem(STORAGE_HOME_KEY));
  paginationSettings.searchType = HOME_SEARCH_TYPE;
  paginationSettings.pagination.reset(paginationSettings.totalItemsHome);
  renderListCard(storageData);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(storageData));
}
