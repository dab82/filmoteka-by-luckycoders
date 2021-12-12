import { dataFormat } from './helpers/data-format';
import { genres } from './common/genres';
import { fetchTopMovies } from './api/api-service-top';
import { renderListCard } from './helpers/render-list-card';
import { paginationSettings } from './helpers/pagination';
import { STORAGE_MAIN_KEY, STORAGE_HOME_KEY } from './common/keys';
import { HOME_SEARCH_TYPE, TOP_SEARCH_TYPE } from './common/search-types';
import { refs } from './common/refs';
import { showLoader, hideLoader } from './helpers/preloader';

refs.topRatedBtn.addEventListener('click', onClickTopRatedBtn);
refs.popularBtn.addEventListener('click', onClickPopularBtn);

async function onClickTopRatedBtn() {
  showLoader();
  try {
    const { results, total_results: totalItems } = await fetchTopMovies(
      paginationSettings.startPage,
    );
    hideLoader();
    paginationSettings.searchType = TOP_SEARCH_TYPE;
    paginationSettings.pagination.reset(totalItems);

    const formattedData = dataFormat(results, genres);
    renderListCard(formattedData);
    setDataToStorageForMain(formattedData);
  } catch (error) {
    console.log(error);
  }
}

export function setDataToStorageForMain(formattedData) {
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}

export function onClickPopularBtn() {
  const dataFromStorage = localStorage.getItem(STORAGE_HOME_KEY);
  const parsedDataFromStorage = JSON.parse(dataFromStorage);
  paginationSettings.searchType = HOME_SEARCH_TYPE;
  paginationSettings.pagination.reset(paginationSettings.totalItemsHome);
  renderListCard(parsedDataFromStorage);
  setDataToStorageForMain(parsedDataFromStorage);
}
