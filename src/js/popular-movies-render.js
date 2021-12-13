import { fetchPopularMovies } from './api/api-service-popular';
import { genres } from './common/genres';
import { dataFormat } from './helpers/data-format.js';
import { STORAGE_HOME_KEY, STORAGE_MAIN_KEY } from './common/keys';
import { renderListCard } from './helpers/render-list-card';
import { initPagination, paginationSettings } from './helpers/pagination';
import { HOME_SEARCH_TYPE } from './common/search-types';

//эта функция получает данные с бэкенда
async function getPopularMoviesData(renderPage) {
  try {
    //получить ответ от фетча axios->
    const { page, results, total_results: totalItems } = await fetchPopularMovies(renderPage);

    initPagination({
      page,
      itemsPerPage: results.length,
      totalItems,
    });

    paginationSettings.searchType = HOME_SEARCH_TYPE;
    paginationSettings.totalItemsHome = totalItems;

    const formattedData = dataFormat(results, genres);
    renderListCard(formattedData);
    setDataToStorageForHome(renderPage, formattedData);
  } catch (error) {
    console.log('Ошибочка', error);
  }
}

getPopularMoviesData(paginationSettings.startPage);

export function setDataToStorageForHome(page, formattedData) {
  if (page === 1) {
    localStorage.setItem(STORAGE_HOME_KEY, JSON.stringify(formattedData));
    localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
    return;
  }
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}
