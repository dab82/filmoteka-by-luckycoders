(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.forEach(card =>{
        card.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal(event) {
      event.preventDefault();
      refs.modal.classList.toggle('visually-hidden');
    }
  })();