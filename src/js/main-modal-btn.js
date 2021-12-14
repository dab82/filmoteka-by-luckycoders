import { refs } from './common/refs';
import { STORAGE_QUEUE_KEY, STORAGE_WATCHED_KEY } from './common/keys';
import { addMod, removeMod } from './helpers/modal-btn-mods';
import ApiLocalStorege from './api/local-storage-library';
import { paginationSettings } from './helpers/pagination';
import { WATCHED_SEARCH_TYPE, QUEUE_SEARCH_TYPE } from './common/search-types';
import { onWatchedRenderCard, onQueueRenderCard } from './watched-queue';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { settingsNotify } from './common/settings-for-notiflix';

refs.backdrop.addEventListener('transitionend', onAddLisenerModalBtn);

function onAddLisenerModalBtn(event) {
  // console.log(event);
  const btnRefs = {
    addQueue: document.querySelector('[data-modal-queue]'),
    addWatched: document.querySelector('[data-modal-watched]'),
  };
  if (refs.backdrop.classList.contains('is-shown')) {
    btnRefs.addQueue.addEventListener('click', onClickBtnQueue);
    btnRefs.addWatched.addEventListener('click', onClickBtnWatched);
    // return;
  }
  // const filmToQueue = ApiLocalStorege.searchFilm(STORAGE_QUEUE_KEY);
  // const filmToWatched = ApiLocalStorege.searchFilm(STORAGE_WATCHED_KEY);
  // if (filmToQueue) {
  //   removeMod(btnRefs.addQueue, 'queue');
  // }
  // if (filmToWatched) {
  //   removeMod(btnRefs.addWatched, 'watched');
  // }
  // btnRefs.addQueue.removeEventListener('click', onClickBtnQueue);
  // btnRefs.addWatched.removeEventListener('click', onClickBtnWatched);
}

function onClickBtnQueue(e) {
  if (e.target.classList.contains('add-to-queue')) {
    const canAddCard = ApiLocalStorege.addCard(STORAGE_QUEUE_KEY);
    if (!canAddCard) {
      Notify.failure(
        'Your library is full. Please remove a couple of movies to free some space.',
        settingsNotify,
      );
      return;
    } else if (paginationSettings.searchType === QUEUE_SEARCH_TYPE) {
      onQueueRenderCard();
    }
    removeMod(e.target, 'queue');
  } else if (e.target.classList.contains('remove-from-queue')) {
    ApiLocalStorege.delCard(STORAGE_QUEUE_KEY);
    addMod(e.target, 'queue');
    if (paginationSettings.searchType === QUEUE_SEARCH_TYPE) {
      onQueueRenderCard();
    }
  }
}
function onClickBtnWatched(e) {
  if (e.target.classList.contains('add-to-watched')) {
    const canAddCard = ApiLocalStorege.addCard(STORAGE_WATCHED_KEY);
    if (!canAddCard) {
      Notify.failure(
        'Your library is full. Please remove a couple of movies to free some space.',
        settingsNotify,
      );
      return;
    } else if (paginationSettings.searchType === WATCHED_SEARCH_TYPE) {
      onWatchedRenderCard();
    }
    removeMod(e.target, 'watched');
  } else if (e.target.classList.contains('remove-from-watched')) {
    ApiLocalStorege.delCard(STORAGE_WATCHED_KEY);
    addMod(e.target, 'watched');
    if (paginationSettings.searchType === WATCHED_SEARCH_TYPE) {
      onWatchedRenderCard();
    }
  }
}
