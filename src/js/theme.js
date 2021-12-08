toggleThemeBtm.onclick = () => {
  document.body.classList.toggle('dark');
  toggleThemeBtm.innerText = document.body.classList.contains('dark')
    ? 'change a theme'
    : 'change a theme';
  localStorage.theme = document.body.className || 'light';
};
