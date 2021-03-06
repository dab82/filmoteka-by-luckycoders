import { renderModal } from './helpers/render-modal';
import { STORAGE_MAIN_KEY } from './common/keys';
import { STORAGE_SELECTED_KEY } from './common/keys';
import { STORAGE_QUEUE_KEY } from './common/keys';
import { STORAGE_WATCHED_KEY } from './common/keys';
import { removeMod } from './helpers/modal-btn-mods';
import ApiLocalStorege from './api/local-storage-library';

let data = [];

const refs = {
  body: document.querySelector('body'),
  link: document.querySelector('.list-card__link'),
  openModal: document.querySelector('.list-card'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModal.addEventListener('click', selectFilm);

function selectFilm(event) {
  if (event.target !== event.currentTarget) {
    let element = findAncestor(event.target, '.list-card__link');
    const elementId = element.getAttribute('data-card-id');

    let dataLS = null;

    try {
      dataLS = JSON.parse(localStorage.getItem(STORAGE_MAIN_KEY));
    } catch {
      return;
    }

    data = dataLS.filter(dat => dat.id == elementId);

    setDataToLocalStorage(data);
    renderModal(...data);
    
    const btnRefs = {      
      addQueue: document.querySelector('[data-modal-queue]'),
      addWatched: document.querySelector('[data-modal-watched]'),
    };

    const filmToQueue = ApiLocalStorege.searchFilm(STORAGE_QUEUE_KEY);
    const filmToWatched = ApiLocalStorege.searchFilm(STORAGE_WATCHED_KEY);
    if (filmToQueue) {
      removeMod(btnRefs.addQueue, 'queue');
    }
    if (filmToWatched) {
      removeMod(btnRefs.addWatched, 'watched');
    }

    const deskription = document.querySelector('.description');
    const title = document.querySelector('.modal-window__film-title');    
    const width=document.body.clientWidth;
    let styleDescription = window.getComputedStyle(deskription, null).getPropertyValue("height");
    let styleTitle = window.getComputedStyle(title, null).getPropertyValue("height");
    
    if((width >= 1024 && parseInt(styleDescription) >= 220)) {
      deskription.style.height="220px";
      deskription.style.overflow="auto";
    }
    if((width >= 1024 && parseInt(styleTitle) >= 36) && parseInt(styleDescription) >= 200) {
      deskription.style.height="182px";
      deskription.style.overflow="auto";
    }
    
    toggleModal(event);
    

    const closeModalBtn = document.querySelector('[data-modal-clos]');
    closeModalBtn.addEventListener('click', closeModal);
    refs.modal.addEventListener('click', closeBackdrop);

    function closeModal() {
      removeClassIsShown();
      removeLocalStorage();
      closeModalBtn.removeEventListener('click', closeModal);
    }

    function toggleModal(event) {
      event.preventDefault();
      addClassIsShown();
      document.addEventListener('keydown', closeModalEsc);
    }

    function findAncestor(element, sel) {
      while (
        (element = element.parentElement) &&
        !(element.matches || element.matchesSelector).call(element, sel)
      );
      return element;
    }

    function setDataToLocalStorage(data) {
      localStorage.setItem(STORAGE_SELECTED_KEY, JSON.stringify(data));
    }
    function removeLocalStorage() {
      localStorage.removeItem(STORAGE_SELECTED_KEY);
    }

    function closeBackdrop(event) {
      if (event.target === refs.modal) {
        removeClassIsShown();
        document.removeEventListener('keydown', closeModalEsc);
        refs.modal.removeEventListener('click', closeBackdrop);
      }
    }

    function closeModalEsc({ key }) {
      if (key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
        removeLocalStorage();
        document.removeEventListener('keydown', closeModalEsc);
        removeClassIsShown();
        closeModalBtn.removeEventListener('click', closeModal);
        refs.modal.removeEventListener('click', closeBackdrop);
      }
    }
    function removeClassIsShown() {
      refs.modal.classList.remove('is-shown');
      refs.body.classList.remove('bg-scrolling-element-when-modal-open');
    }
    function addClassIsShown() {
      refs.modal.classList.add('is-shown');
      refs.body.classList.add('bg-scrolling-element-when-modal-open');
    }
  }
}
