import { refs } from './common/refs';
import { STORAGE_WATCHED_KEY, STORAGE_MAIN_KEY, STORAGE_HOME_KEY } from './common/keys';
import { renderListCard } from './helpers/render-list-card';
import { setDataToStorageForMain } from './helpers/update-main-key';
import { onWatchedRenderCard } from './watched-queue';
import { paginationSettings } from './pagination';
import { HOME_SEARCH_TYPE } from './common/search-types';

refs.logo.addEventListener('click', clickHome);
refs.homeLink.addEventListener('click', clickHome);
refs.libLink.addEventListener('click', clickLib);
refs.watchedBtn.addEventListener('click', activeBtnWatched);
refs.queueBtn.addEventListener('click', activeBtnQueue);

function clickLib() {
  refs.searchForm.value = '';
  addClassLibrary();
  activeBorderLib();
  activeBtnWatched();
  //отрисовать карточки по данным из watched
  onWatchedRenderCard();
  // убирает кнопки ТОР-POPULAR
  isHiddenSearchBtn();
}

function clickHome(e) {
  e.preventDefault();
  addClassHome();
  activeBorderHome();
  // возвращает кнопки ТОР-POPULAR
  hiddenSearchBtn();
  refs.pagination.classList.remove('visually-hidden');
  const storageData = JSON.parse(localStorage.getItem(STORAGE_HOME_KEY));
  paginationSettings.searchType = HOME_SEARCH_TYPE;
  paginationSettings.pagination.reset(paginationSettings.totalItemsHome);
  renderListCard(storageData);
  setDataToStorageForMain(storageData);
}

function addClassLibrary() {
  refs.homeBackground.classList.remove('page-header');
  refs.homeBackground.classList.add('page-lib');

  refs.btnList.classList.remove('visually-hidden');
  refs.input.classList.add('visually-hidden');
}

function activeBorderLib() {
  refs.homeLink.classList.remove('current');
  refs.libLink.classList.add('current');
}

function addClassHome() {
  refs.homeBackground.classList.remove('page-lib');
  refs.homeBackground.classList.add('page-header');

  refs.input.classList.remove('visually-hidden');
  refs.btnList.classList.add('visually-hidden');
}

function activeBorderHome() {
  refs.libLink.classList.remove('current');
  refs.homeLink.classList.add('current');
}

// убирает кнопки ТОР-POPULAR
function isHiddenSearchBtn() {
  refs.popularBtn.classList.add('visually-hidden');
  refs.topRatedBtn.classList.add('visually-hidden');
}
// возвращает кнопки ТОР-POPULAR
function hiddenSearchBtn() {
  refs.popularBtn.classList.remove('visually-hidden');
  refs.topRatedBtn.classList.remove('visually-hidden');
}

function activeBtnWatched() {
  refs.queueBtn.classList.add('no-active');

  refs.watchedBtn.classList.add('button-active');
  refs.watchedBtn.classList.remove('no-active');

  refs.queueBtn.classList.remove('button-active');
}

function activeBtnQueue() {
  refs.watchedBtn.classList.remove('button-active');
  refs.queueBtn.classList.add('button-active');
  refs.watchedBtn.classList.add('no-active');
  refs.queueBtn.classList.remove('no-active');
}
