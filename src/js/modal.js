    import {renderModal} from './helpers/render-modal'
      if (localStorage === null){
        return
      }else{
        const refs = {
          body: document.querySelector('body'),
          link: document.querySelector('.list-card__link'),
          openModal:  document.querySelector('.list-card'),          
          modal: document.querySelector('[data-modal]'),
        };     
        
        refs.openModal.addEventListener("click", selectFilm);
        
        let data
    
        function selectFilm(event){
          if(event.target !== event.currentTarget){ 
            
            let element = findAncestor(event.target, '.list-card__link'); 
            const elementId = element.getAttribute("data-card-id")
            const dataLS = JSON.parse(localStorage.getItem('home-page-items') || localStorage.getItem('active-search-items'));
             data = dataLS.filter(dat => dat.id == elementId)             
             
             renderModal(...data);
             toggleModal(event)

             const closeModalBtn = document.querySelector('[data-modal-close]');
             closeModalBtn.addEventListener('click', toggleModal);
          }
        }   
        
        
        function toggleModal() {
          event.preventDefault();           
          refs.modal.classList.toggle('visually-hidden');
          refs.body.classList.toggle('bg-scrolling-element-when-modal-open');
        }

        
        function findAncestor(element, sel) {
          while ((element = element.parentElement) && !((element.matches || element.matchesSelector).call(element,sel)));
          return element;
        };
       
      }
      
    
    