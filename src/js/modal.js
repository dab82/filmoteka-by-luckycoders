    
      if (localStorage === null){
        return
      }else{
        const refs = {
          body: document.querySelector('body'),
          link: document.querySelector('.list-card__link'),
          openModal:  document.querySelector('.list-card'),
          closeModalBtn: document.querySelector('[data-modal-close]'),
          modal: document.querySelector('[data-modal]'),
        };     
        
        refs.openModal.addEventListener("click", selectFilm);
        refs.closeModalBtn.addEventListener('click', toggleModal); 

    
        function selectFilm(event){
          if(event.target !== event.currenttarget){
            console.log(event.target)
            toggleModal(event)
          }
        }   

        function toggleModal(event) {
          event.preventDefault(); 
          refs.modal.classList.toggle('visually-hidden');
          refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
        }
       
      }
      
    
    