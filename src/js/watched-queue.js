import { refs } from "./common/refs";
import { STORAGE_WATCHED_KEY, STORAGE_QUEUE_KEY, STORAGE_MAIN_KEY } from "./common/keys";
import { renderListCard } from './helpers/render-list-card';
import { paginationSettings } from './pagination';


refs.watchedBtn.addEventListener('click', onWatchedRenderCard);
refs.queueBtn.addEventListener('click', onQueueRenderCard);

export function onWatchedRenderCard(e) {
    e.preventDefault();
    refs.listContainer.innerHTML = '';
    let getWatched = localStorage.getItem(STORAGE_WATCHED_KEY);
    const parsedDataGetWatched = JSON.parse(getWatched);
    renderListCard(parsedDataGetWatched);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(parsedDataGetWatched));
    }

function onQueueRenderCard(e) {
    e.preventDefault();
    refs.listContainer.innerHTML = '';
    let getQueue = localStorage.getItem(STORAGE_QUEUE_KEY);
    const parsedDataGetQueue = JSON.parse(getQueue);
    renderListCard(parsedDataGetQueue);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(parsedDataGetQueue));
}