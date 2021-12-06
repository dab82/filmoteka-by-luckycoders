import { refs } from '../common/refs';
import itemsTemplate from '../../templates/movies-items.hbs';

export function renderListCard(data) {
  refs.listContainer.innerHTML = '';
  const markup = itemsTemplate({ ...data });
  refs.listContainer.insertAdjacentHTML('afterbegin', markup);
}
