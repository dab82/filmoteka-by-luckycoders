import { fetchPopularMovies } from './api-service-popular';
import { genres } from './common/genres';
import { dataFormat } from './helpers/data-format.js';
import { setDataToStorageForHome } from './popular-movies-render';
import { renderListCard } from './helpers/render-list-card';
import Pagination from 'tui-pagination';
import { refs } from './common/refs';

export const paginationSettings = {
  startPage: 1,
  searchType: null,
  pagination: null,
};

export const initPagination = ({ page, itemsPerPage, totalItems }) => {
  const options = {
    page,
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
  };

  const pagination = new Pagination(refs.pagination, options);
  paginationSettings.pagination = pagination;

  pagination.on('afterMove', async ({ page }) => {
    if (paginationSettings.searchType === 'popular') {
      try {
        const response = await fetchPopularMovies(page);
        const formattedData = dataFormat(response.results, genres);
        setDataToStorageForHome(page, formattedData);
        renderListCard(formattedData);
      } catch (error) {
        console.log(error);
      }
    }
  });
  return pagination;
};
