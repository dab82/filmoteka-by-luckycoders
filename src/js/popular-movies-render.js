import { fetchPopularMovies } from './api-service-popular';
import itemsTemplate from '../templates/movies-items.hbs';
import { genres } from './common/genres';
import { dataFormat } from './helpers/data-format.js';
import { STORAGE_MAIN_KEY } from './common/keys';

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
  //отправить форматированные данные дальше для рендера->
  renderMarkup(formattedData);
  return formattedData;
}

//эта функция чистит ul и рендерит полученные данные
function renderMarkup(formattedData) {
  refs.popularMovieContainer.innerHTML = '';
  //получить разметку из шаблона handlebars(возвращается строка)->
  const markup = itemsTemplate({ ...formattedData });
  //наконец-то рендер)))
  refs.popularMovieContainer.insertAdjacentHTML('afterbegin', markup);
}

//эта функция сохраняет данные по популярным фильмам в local storage
function setDataToLocalStorage(formattedData) {
  localStorage.removeItem(STORAGE_MAIN_KEY);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}
