import * as basicLightbox from 'basiclightbox';

import { developers } from './developers-obj';

import spriteUrl from '../images/sprite.svg';

const markupTeamCard = developers
  .map(({ nameDev, photo, roleDev, gitDev }) => {
    return `
<div class="team-card">
    <img src="${photo}" alt="${nameDev}" class="team-image">
    <p class="team-name">${nameDev}</p>
    <p class="team-role">${roleDev}</p>
    <a href="${gitDev}" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>`;
  })
  .join('');

const markupModal = `<div class="team-wrapper">${markupTeamCard}</div>`;
const container = document.querySelector('.developers');

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markupModal);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
