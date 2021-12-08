import { refs } from "./common/refs";

function clickLib() {
    addClassLibrary();
    activeBorderLib();
    activeBtnWatched();
}

function clickHome() {
    addClassHome();
    activeBorderHome();
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