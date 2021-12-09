import { fetchPopularMovies } from './api-service-popular';
import { fetchTopMovies } from './api-service-top';
import { genres } from './common/genres';
import { dataFormat } from './helpers/data-format.js';
import { renderListCard } from './helpers/render-list-card';
import { setDataToStorageForHome } from './popular-movies-render';
import { setDataToStorageForMain } from './top-rated';
import Pagination from 'tui-pagination';
import { refs } from './common/refs';
import { HOME_SEARCH_TYPE, TOP_SEARCH_TYPE, INPUT_SEARCH_TYPE } from './common/search-types';
import sprite from '../images/sprite.svg';

const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

export const paginationSettings = {
  startPage: 1,
  searchType: null,
  pagination: null,
  totalItemsHome: null,
};

export const initPagination = ({ page, itemsPerPage, totalItems }) => {
  const options = {
    page,
    itemsPerPage,
    totalItems,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
      currentPage: '<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.pagination, options);
  paginationSettings.pagination = pagination;

  pagination.on('afterMove', async ({ page }) => {
    if (paginationSettings.searchType === HOME_SEARCH_TYPE) {
      try {
        const response = await fetchPopularMovies(page);
        const formattedData = dataFormat(response.results, genres);
        setDataToStorageForHome(page, formattedData);
        renderListCard(formattedData);
      } catch (error) {
        console.log(error);
      }
    }
    if (paginationSettings.searchType === TOP_SEARCH_TYPE) {
      try {
        const response = await fetchTopMovies(page);
        const formattedData = dataFormat(response.results, genres);
        setDataToStorageForMain(formattedData);
        renderListCard(formattedData);
      } catch (error) {
        console.log(error);
      }
    }
  });
  return pagination;
};
