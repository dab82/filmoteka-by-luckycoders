import { refs } from '../common/refs';
import modalTemplate from '../../templates/modal-card.hbs';

export function renderModal(data) {
  refs.backdrop.innerHTML = '';
  const markup = modalTemplate(data);
  refs.backdrop.insertAdjacentHTML('afterbegin', markup);
}
