// import { refs } from "./common/refs";

const refs = {
    homeBackground: document.querySelector('.page-header'),
    menu: document.querySelector('.menu'),
    menuIsActive: document.querySelector('.menu__link'),
    btnList: document.querySelector('.btn__list'),
    input: document.querySelector('.search-form'),
    homeLink: document.querySelector('.home-link'),
    libLink: document.querySelector('.lib-link'),
}


function clickLib() {
    addClassLibrary();
    activeBorderLib();
}

function clickHome() {
    addClassHome();
    activeBorderHome();
}

refs.homeLink.addEventListener('click', clickHome);
refs.libLink.addEventListener('click', clickLib);

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
