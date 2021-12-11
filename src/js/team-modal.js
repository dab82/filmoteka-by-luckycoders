import * as basicLightbox from 'basiclightbox';

import dimaUrl from '../images/team/dima.jpg';
import annaUrl from '../images/team/anna.jpg';
import yevheniiaUrl from '../images/team/yevheniia.jpg';
import igorUrl from '../images/team/igor.jpg';
import andreyUrl from '../images/team/andrey.jpg';
import kateUrl from '../images/team/kate.jpg';
import lanaUrl from '../images/team/lana.jpg';
import nataliaUrl from '../images/team/natalia.jpg';
import leoUrl from '../images/team/leo.jpg';

import spriteUrl from '../images/sprite.svg';

const developers = [
  {
    nameDev: 'Бонадренко Дмитрий',
    photo: `${dimaUrl}`,
    roleDev: 'Team-lead',
    gitDev: 'https://github.com/dab82',
  },
  // 2
  {
    nameDev: 'Самсоненко Анна',
    photo: `${annaUrl}`,
    roleDev: 'Scrum-master',
    gitDev: 'https://github.com/AnnSamsonenko',
  },
  // 3
  {
    nameDev: 'Волкова Евгения',
    photo: `${yevheniiaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/YevheniiaVolkova',
  },
  // 4
  {
    nameDev: 'Тарасов Игорь',
    photo: `${igorUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/ITigor1985',
  },
  // 5
  {
    nameDev: 'Шевченко Андрей',
    photo: `${andreyUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/shevchenko-andrey',
  },
  // 6
  {
    nameDev: 'Белявская Екатерина',
    photo: `${kateUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/beliavskaja',
  },
  // 7
  {
    nameDev: 'Овчаренко Светлана',
    photo: `${lanaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/O-Lana',
  },
  // 8
  {
    nameDev: 'Ступка Наталья',
    photo: `${nataliaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/NataliaStupka',
  },
  // 9
  {
    nameDev: 'Лео (Nguyen Long)',
    photo: `${leoUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/HLongNguyen0',
  },
];

const markupTeamCard = developers
  .map(({ nameDev, photo, roleDev, gitDev }) => {
    return `
<li class="team-card">
    <img src="${photo}" alt="${nameDev}" class="team-image">
    <p class="team-name">${nameDev}</p>
    <p class="team-role">${roleDev}</p>
    <a href="${gitDev}" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</li>`;
  })
  .join('');
const markupModal = `<a href="https://github.com/dab82/filmoteka-by-luckycoders" target"_blank" class="team-title">LUCKY&#127808;CODERS</a>
 <button type='button' class='modal-window__close-btn' data-modal-close>
    <span class='material-icons'>close</span>
  </button>
<ul class="team-wrapper">
${markupTeamCard}
</ul>
</div>`;
const container = document.querySelector('.developers');

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markupModal);

function openModal(e) {
  modal.show();
  const body = document.querySelector('body');
  body.classList.add('bg-scrolling-element-when-modal-open');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeModalHandler);
  const backdrop = document.querySelector('.basicLightbox');
  backdrop.addEventListener('click', closeBackdrop);

  function closeModal(e) {
    modal.close();
    body.classList.remove('bg-scrolling-element-when-modal-open');
    closeModalBtn.removeEventListener('click', closeModal);
  }

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      body.classList.remove('bg-scrolling-element-when-modal-open');
      window.removeEventListener('keydown', closeModalHandler);
    }
  }

  function closeBackdrop(e) {
    modal.close();
    body.classList.remove('bg-scrolling-element-when-modal-open');
  }
}
