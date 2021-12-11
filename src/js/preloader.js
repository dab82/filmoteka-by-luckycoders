export  function preloader (){window.onload = function () {
    document.body.classList.add('loaded');
  
 
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
}