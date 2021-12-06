import { fetchPopularMovies } from './api-service-popular';
import { genres } from './common/genres';
import { dataFormat } from './helpers/data-format.js';
import { STORAGE_MAIN_KEY } from './common/keys';
import { renderListCard } from './helpers/render-list-card';

const refs = {
  popularMovieContainer: document.querySelector('.list-card'),
};

//эта функция получает данные с бэкенда
async function getPopularMoviesData() {
  try {
    //получить ответ от фетча axios->
    const response = await fetchPopularMovies();
    //отправить данные дальше для форматирования и рендера->
    const formattedData = prepareDataForRender(response.results);
    //отправить форматированные данные в local storage ->
    setDataToLocalStorage(formattedData);
  } catch (error) {
    console.log('Ошибочка', error);
  }
}

getPopularMoviesData();

//эта функция готовит данные для рендера
function prepareDataForRender(data) {
  //отформатировать с помощью хелпера данные ->
  const formattedData = dataFormat(data, genres);
  //отрендерить список фильмов->
  renderListCard(formattedData);
  //ВАЖНО! вернуть из функции форматированные данные, чтобы отправить в local storage
  return formattedData;
}

//эта функция сохраняет данные по популярным фильмам в local storage
function setDataToLocalStorage(formattedData) {
  localStorage.removeItem(STORAGE_MAIN_KEY);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}
