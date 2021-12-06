const timerId = setInterval(() => {
  if(localStorage === null){    
    return
  } else{
    const refs = {
      body: document.querySelector('body'),
      openModal:  document.querySelectorAll('.list-card__link'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
      
  //console.log(refs.openModal)
    refs.openModal.forEach(card =>{
        card.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal(event) {
      event.preventDefault();
      const filmsId = event.currentTarget.getAttribute('data-card-id');      
      refs.modal.classList.toggle('visually-hidden');
      refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
    }
    clear()
  }
  
  
}, 1000);

 function clear(){
  clearInterval(timerId);
 }  