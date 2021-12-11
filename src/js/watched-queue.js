import { refs } from './common/refs';
import { STORAGE_WATCHED_KEY, STORAGE_QUEUE_KEY, STORAGE_MAIN_KEY } from './common/keys';
import { renderListCard } from './helpers/render-list-card';
import { setDataToStorageForMain } from './helpers/update-main-key';
import { paginationSettings } from './helpers/pagination';
import { WATCHED_SEARCH_TYPE, QUEUE_SEARCH_TYPE } from './common/search-types';

refs.watchedBtn.addEventListener('click', onWatchedRenderCard);
refs.queueBtn.addEventListener('click', onQueueRenderCard);

export function onWatchedRenderCard() {
  refs.listContainer.innerHTML = '';
  let getWatched = localStorage.getItem(STORAGE_WATCHED_KEY);
  const parsedDataGetWatched = JSON.parse(getWatched);
  if (getWatched !== null && parsedDataGetWatched.length !== 0) {
    paginationSettings.pagination.reset(parsedDataGetWatched.length);
    paginationSettings.searchType = WATCHED_SEARCH_TYPE;
    renderListCard(parsedDataGetWatched);
    setDataToStorageForMain(parsedDataGetWatched);
  } else {
    refs.pagination.classList.add('visually-hidden');
  }
}

export function onQueueRenderCard() {
  refs.listContainer.innerHTML = '';
  let getQueue = localStorage.getItem(STORAGE_QUEUE_KEY);
  const parsedDataGetQueue = JSON.parse(getQueue);
  if (getQueue !== null && parsedDataGetQueue.length !== 0) {
    paginationSettings.pagination.reset(parsedDataGetQueue.length);
    paginationSettings.searchType = QUEUE_SEARCH_TYPE;
    renderListCard(parsedDataGetQueue);
    setDataToStorageForMain(parsedDataGetQueue);
  } else {
    refs.pagination.classList.add('visually-hidden');
  }
}
