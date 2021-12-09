import { refs } from './common/refs';
import { STORAGE_WATCHED_KEY, STORAGE_QUEUE_KEY } from './common/keys';
import ApiLocalStorege from './api-local-storage';
refs.backdrop.addEventListener('transitionend', onAddLisenerModalBtn);
export const onClickAddQueue = e => {
  ApiLocalStorege.addCard(STORAGE_QUEUE_KEY);
  addChengeActionBtn(e.target);
};
export const onClickRemoveQueue = e => {
  ApiLocalStorege.delCard(STORAGE_QUEUE_KEY);
  removeChengeActionBtn(e.target);
};

function onAddLisenerModalBtn() {
  const modalBtnRefs = {
    addQueue: document.querySelector('.add-to-queue'),
    addWatched: document.querySelector('.add-to-watched'),
  };
  if (!modalBtnRefs.addQueue) {
    return;
  }
  // if (ApiLocalStorege.searchFilm(STORAGE_QUEUE_KEY)) {
  //   removeChengeActionBtn(modalBtnRefs.addQueue);
  // }
  modalBtnRefs.addQueue.addEventListener('click', onClickAddQueue);
}
function removeChengeActionBtn(btn) {
  btn.removeEventListener('click', onClickRemoveQueue);
  btn.classList.remove('remove-from-queue');
  btn.textContent = 'add from queue';
  btn.classList.add('add-to-queue');
  btn.addEventListener('click', onClickAddQueue);
}
function addChengeActionBtn(btn) {
  btn.removeEventListener('click', onClickAddQueue);
  btn.classList.remove('add-to-queue');
  btn.textContent = 'remove from queue';
  btn.classList.add("remove-from-queue'");
  btn.addEventListener('click', onClickRemoveQueue);
}
// function onCheckWatched(key) {
//   searchFilm(STORAGE_WATCHED_KEY);
// }
export default { onClickAddQueue, onClickRemoveQueue };
