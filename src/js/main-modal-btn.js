import { refs } from './common/refs';
import { STORAGE_QUEUE_KEY, STORAGE_WATCHED_KEY } from './common/keys';
import { onClickAddQueue, onClickRemoveQueue } from './btn-add-queue';
import { onClickAddWatched, onClickRemoveWatched } from './btn-add-watched';

refs.backdrop.addEventListener('transitionend', onAddLisenerModalBtn);

function onAddLisenerModalBtn() {
  const btnRefs = {
    addQueue: document.querySelector('[data-modal-queue]'),
    addWatched: document.querySelector('[data-modal-watched]'),
  };
  if (!refs.backdrop.classList.contains('is-hidden')) {
    btnRefs.addQueue.removeEventListener('click', onClickBtnQueue);
    btnRefs.addWatched.removeEventListener('click', onClickBtnWatched);
    console.log('мы вышли');
    return;
  }

  btnRefs.addQueue.addEventListener('click', onClickBtnQueue);
  btnRefs.addQueue.addEventListener('click', onClickBtnWatched);
}

function onClickBtnQueue(e) {
  onClickAddQueue(STORAGE_WATCHED_KEY);
  searchFilm(STORAGE_WATCHED_KEY);
  console.log('searchFilm(STORAGE_WATCHED_KEY)', searchFilm(STORAGE_WATCHED_KEY));
}
function onClickBtnWatched(e) {
  searchFilm(STORAGE_QUEUE_KEY);
}
