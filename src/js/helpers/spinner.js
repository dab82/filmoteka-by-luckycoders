const contentContainer = document.querySelector('main');

export function showLoader () {
  contentContainer.classList.add('loading');
}

export function hideLoader () {
  contentContainer.classList.remove('loading');
}