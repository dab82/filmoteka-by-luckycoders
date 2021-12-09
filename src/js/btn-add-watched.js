import ApiLocalStorege from './local-storage-library';

export const onClickAddWatched = e => {
  ApiLocalStorege.addCard(STORAGE_WATCHED_KEY);
  addChengeActionBtn(e.target);
};
export const onClickRemoveWatched = e => {
  ApiLocalStorege.delCard(STORAGE_WATCHED_KEY);
  removeChengeActionBtn(e.target);
};
function removeChengeActionBtn(btn) {
  btn.removeEventListener('click', onClickRemoveWatched);
  btn.classList.remove('remove-from-Watched');
  btn.textContent = 'add from Watched';
  btn.classList.add('add-to-Watched');
  btn.addEventListener('click', onClickAddWatched);
}
function addChengeActionBtn(btn) {
  btn.removeEventListener('click', onClickAddWatched);
  btn.classList.remove('add-to-Watched');
  btn.textContent = 'remove from watched';
  btn.classList.add("remove-from-watched'");
  btn.addEventListener('click', onClickRemoveWatched);
}
