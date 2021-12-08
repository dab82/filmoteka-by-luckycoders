
import { dataFormat } from './helpers/data-format';
import { genres } from './common/genres';
import { fetchTopMovies } from './api-service-top';
import { paginationSettings } from './pagination';
import { renderListCard } from './helpers/render-list-card';
import { STORAGE_MAIN_KEY } from './common/keys';
import { STORAGE_HOME_KEY } from './common/keys';


const refs = {
  popolarBtn: document.querySelector('.popular-btn'),
  topRatedBtn: document.querySelector('.top-rated-btn'),
};

refs.topRatedBtn.addEventListener('click', onClickTopRatedBtn);
refs.popolarBtn.addEventListener('click', onClickPopularBtn);

async function onClickTopRatedBtn (){
  const response = await fetchTopMovies(paginationSettings.startPage);
  // console.log(response);
  const formattedData = dataFormat(response.results, genres);
  // console.log(formattedData);
  renderListCard(formattedData);
  setDataToStorage(formattedData);
}
function setDataToStorage(formattedData) {
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}

function onClickPopularBtn() {
  const dataFromStorage = localStorage.getItem(STORAGE_HOME_KEY);
  const parsedDataFromStorage = JSON.parse(dataFromStorage);
  // console.log(parsedDataFromStorage);
  renderListCard(parsedDataFromStorage);
  setDataToStorage(parsedDataFromStorage);
}





// refs.btnTopRated.addEventListener('click', onClickBtnTopRated);
// function onClickBtnTopRated(e) {
//   apiService.page = 1;
//    toggleBtnActive(e);
//   apiService.getByTopRated().then(( results ) => {
//     refs.gallery.innerHTML = galleryHbs(results);
//   });
// }
//  export {onClickBtnTopRated }
 
// function toggleBtnActive(e) {
//     if (e.target === refs.btnPopular) {
//     refs.btnPopular.classList.add('active');
//     refs.btnTopRated.classList.remove('active');
//   }
//   if (e.target === refs.btnTopRated) {
//     refs.btnPopular.classList.remove('active');
//     refs.btnTopRated.classList.add('active');
//   }
  
// }

