import { refs } from "./common/refs";
import { STORAGE_WATCHED_KEY, STORAGE_MAIN_KEY } from "./common/keys";
import { renderListCard } from './helpers/render-list-card';

function clickLib() {
    addClassLibrary();
    activeBorderLib();
    activeBtnWatched();
    watchedPage();
    // убирает кнопки ТОР-POPULAR
    isHiddenSearchBtn();
}

function clickHome() {
    addClassHome();
    activeBorderHome();
    // убирает кнопки ТОР-POPULAR
    hiddenSearchBtn();
}

refs.homeLink.addEventListener('click', clickHome);
refs.libLink.addEventListener('click', clickLib);
refs.watchedBtn.addEventListener('click', activeBtnWatched);
refs.queueBtn.addEventListener('click', activeBtnQueue);

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
    // убирает кнопки ТОР-POPULAR
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

function watchedPage() {
    refs.listContainer.innerHTML = '';
    let watched = localStorage.getItem(STORAGE_WATCHED_KEY);

    if (watched !== null) {
    const parsedDataWatched = JSON.parse(watched);
        renderListCard(parsedDataWatched);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(parsedDataWatched));
    }
  }
