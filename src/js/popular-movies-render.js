import { fetchPopularMovies } from './api-service-popular';
import itemsTemplate from '../templates/movies-items.hbs';
import { genres } from './common/genres';
import { dataFormat } from './helpers/data-format.js';
import { STORAGE_MAIN_KEY } from './common/keys';

const refs = {
  popularMovieContainer: document.querySelector('.list-card'),
};

async function getPopularMoviesData() {
  try {
    const response = await fetchPopularMovies();
    console.log('это ответ от fetch', response);
    const formattedData = prepareDataForRender(response.results);
    setDataToLocalStorage(formattedData);
  } catch (error) {
    console.log('Ошибочка', error);
  }
}

getPopularMoviesData();

function prepareDataForRender(data) {
  console.log('было таблицой 1 (Data)', data);
  const formattedData = dataFormat(data, genres);
  console.log('было таблицой 2',formattedData);
  renderMarkup(formattedData);
  return formattedData;
}

function renderMarkup(formattedData) {
  refs.popularMovieContainer.innerHTML = '';
  const markup = itemsTemplate({ ...formattedData });
  refs.popularMovieContainer.insertAdjacentHTML('afterbegin', markup);
}

function setDataToLocalStorage(formattedData) {
  localStorage.removeItem(STORAGE_MAIN_KEY);
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}

