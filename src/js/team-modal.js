import * as basicLightbox from 'basiclightbox';
import showConfetti from './common/confetti';

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
    nameDev: 'Дмитрий',
    surnameDev: 'Бонадренко',
    photo: `${dimaUrl}`,
    roleDev: 'Team-lead',
    gitDev: 'https://github.com/dab82',
  },
  // 2
  {
    nameDev: 'Анна',
    surnameDev: 'Самсоненко',
    photo: `${annaUrl}`,
    roleDev: 'Scrum-master',
    gitDev: 'https://github.com/AnnSamsonenko',
  },
  // 3
  {
    nameDev: 'Евгения',
    surnameDev: 'Волкова',
    photo: `${yevheniiaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/YevheniiaVolkova',
  },
  // 4
  {
    nameDev: 'Игорь',
    surnameDev: 'Тарасов',
    photo: `${igorUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/ITigor1985',
  },
  // 5
  {
    nameDev: 'Андрей',
    surnameDev: 'Шевченко',
    photo: `${andreyUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/shevchenko-andrey',
  },
  // 6
  {
    nameDev: 'Екатерина',
    surnameDev: 'Белявская',
    photo: `${kateUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/beliavskaja',
  },
  // 7
  {
    nameDev: 'Светлана',
    surnameDev: 'Овчаренко',
    photo: `${lanaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/O-Lana',
  },
  // 8
  {
    nameDev: 'Наталья',
    surnameDev: 'Ступка',
    photo: `${nataliaUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/NataliaStupka',
  },
  // 9
  {
    nameDev: '(Nguyen Long)',
    surnameDev: 'Лео',
    photo: `${leoUrl}`,
    roleDev: 'Front-end Developer',
    gitDev: 'https://github.com/HLongNguyen0',
  },
];

const markupTeamCard = developers
  .map(({ surnameDev, nameDev, photo, roleDev, gitDev }) => {
    return `
<li class="team-card">
    <img src="${photo}" alt="${nameDev}" class="team-image">
    <p class="team-name">${surnameDev}<br>${nameDev}</p>
    <p class="team-role">${roleDev}</p>
    <a href="${gitDev}" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</li>`;
  })
  .join('');
const markupModal = `<p class="team-title">LUCKY<span class="clover"></span>CODERS</p>
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
  e.preventDefault();
  showConfetti();
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
    if(e.target === backdrop){
      modal.close();
    body.classList.remove('bg-scrolling-element-when-modal-open');
    backdrop.removeEventListener('click', closeBackdrop);
    }
    
  }
}
