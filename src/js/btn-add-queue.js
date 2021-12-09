import ApiLocalStorege from './local-storage-library';
export const onClickAddQueue = key => {
  ApiLocalStorege.addCard(key);
};
export const onClickRemoveQueue = e => {
  ApiLocalStorege.delCard(STORAGE_QUEUE_KEY);
  removeChengeActionBtn(e.target);
};
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
