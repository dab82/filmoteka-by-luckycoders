import { refs } from './common/refs';
import { STORAGE_WATCHED_KEY, STORAGE_QUEUE_KEY } from './common/keys';
import ApiLocalStorege from './api-local-storage';
refs.backdrop.addEventListener('transitionend', onAddLisenerModalBtn);
const onClickAddQueue = e => {
  ApiLocalStorege.addCard(STORAGE_QUEUE_KEY);
  e.target.removeEventListener('click', onClickAddQueue);
  e.target.classList.remove('add-to-queue');
  e.target.textContent = 'remove from queue';
  e.target.classList.add("remove-from-queue'");
  e.target.addEventListener('click', onClickRemoveQueue);
};
const onClickRemoveQueue = e => {
  ApiLocalStorege.delCard(STORAGE_QUEUE_KEY);
  e.target.removeEventListener('click', onClickRemoveQueue);
  e.target.classList.remove('remove-from-queue');
  e.target.textContent = 'add from queue';
  e.target.classList.add('add-to-queue');
  e.target.addEventListener('click', onClickAddQueue);
};

function onAddLisenerModalBtn() {
  const modalBtnRefs = {
    addQueue: document.querySelector('.add-to-queue'),
    addWatched: document.querySelector('.add-to-watched'),
  };
  if (!modalBtnRefs.addQueue) {
    return;
  }
  modalBtnRefs.addQueue.addEventListener('click', onClickAddQueue);
}
