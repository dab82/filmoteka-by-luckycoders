import { dataFormat } from './helpers/data-format';
import { genres } from './common/genres';
import { fetchTopMovies } from './api/api-service-top';
import { renderListCard } from './helpers/render-list-card';
import { paginationSettings } from './helpers/pagination';
import { STORAGE_HOME_KEY } from './common/keys';
import { HOME_SEARCH_TYPE, TOP_SEARCH_TYPE } from './common/search-types';
import { setDataToStorageForMain } from './helpers/update-main-key';
import { refs } from './common/refs';
import { showLoader, hideLoader } from './helpers/spinner';

refs.topRatedBtn.addEventListener('click', onClickTopRatedBtn);
refs.popularBtn.addEventListener('click', onClickPopularBtn);

async function onClickTopRatedBtn() {
  showLoader();
  refs.searchForm.value = '';
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

export function onClickPopularBtn() {
  refs.searchForm.value = '';
  const dataFromStorage = localStorage.getItem(STORAGE_HOME_KEY);
  const parsedDataFromStorage = JSON.parse(dataFromStorage);
  paginationSettings.searchType = HOME_SEARCH_TYPE;
  paginationSettings.pagination.reset(paginationSettings.totalItemsHome);
  renderListCard(parsedDataFromStorage);
  setDataToStorageForMain(parsedDataFromStorage);
}
