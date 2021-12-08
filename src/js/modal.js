import { renderModal } from './helpers/render-modal';
import { STORAGE_MAIN_KEY } from './common/keys';
import { STORAGE_SELECTED_KEY } from './common/keys';

let data = [];

if (localStorage.getItem(STORAGE_MAIN_KEY) === null) {
} else {
  const refs = {
    body: document.querySelector('body'),
    link: document.querySelector('.list-card__link'),
    openModal: document.querySelector('.list-card'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModal.addEventListener('click', selectFilm);

  function selectFilm(event) {
    if (event.target !== event.currentTarget) {
      let element = findAncestor(event.target, '.list-card__link');
      const elementId = element.getAttribute('data-card-id');
      const dataLS = JSON.parse(localStorage.getItem(STORAGE_MAIN_KEY));
      data = dataLS.filter(dat => dat.id == elementId);

      setDataToLocalStorage(data);
      renderModal(...data);
      toggleModal(event);

      const closeModalBtn = document.querySelector('[data-modal-close]');
      closeModalBtn.addEventListener('click', closeModal);
      refs.backdrop.addEventListener('click', closeBackdrop);

      function closeModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
        removeLocalStorage();
        closeModalBtn.removeEventListener('click', closeModal);
      }

      function toggleModal(event) {
        event.preventDefault();
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
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
    
      function closeBackdrop() {
        if(event.target === refs.modal){
          refs.backdrop.classList.toggle('is-hidden');
        refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
        removeLocalStorage();
        document.removeEventListener('keydown', closeModalEsc);
        }
        
      }
    
      function closeModalEsc({ key }) {
        if (key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
          removeLocalStorage();
          refs.modal.classList.toggle('is-hidden');
          refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
          document.removeEventListener('keydown', closeModalEsc);
          closeModalBtn.removeEventListener('click', closeModal);
      refs.backdrop.removeEventListener('click', closeBackdrop);
        }
      }
    }
  }

  
}
