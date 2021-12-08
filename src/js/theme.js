// toggleThemeBtm.onclick = () => {
//   document.body.classList.toggle('dark');
//   toggleThemeBtm.innerText = document.body.classList.contains('dark')
//     ? 'change a theme'
//     : 'change a theme';
//   localStorage.theme = document.body.className || 'light';
// };

const checkbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);

checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange() {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);

  setThemeInfoToLocalStorage();
}

function setThemeInfoToLocalStorage() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    checkbox.setAttribute('checked', false);
    localStorage.setItem('active-theme', Theme.LIGHT);
  } else if (document.body.classList.contains(Theme.DARK)) {
    checkbox.setAttribute('checked', true);
    localStorage.setItem('active-theme', Theme.DARK);
  }
}

getThemeInfoFromLocalStorage();

function getThemeInfoFromLocalStorage() {
  if (localStorage.getItem('active-theme') === Theme.DARK) {
    onCheckboxChange();
  }
}
