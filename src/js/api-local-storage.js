import { STORAGE_SELECTED_KEY } from './common/keys';
function addCard(libraryKey) {
  const dataFilm = validCurrentData();
  if (!dataFilm) {
    return;
  }
  parseData();
  library.push(dataFilm);
  returnData(libraryKey, library);
  return true;
}

function delCard(libraryKey) {
  let library = null;
  let id = null;
  const dataFilm = validCurrentData();
  if (!dataFilm) {
    return;
  }
  id = dataFilm.id;
  library = parseData(libraryKey);
  library = library.filter(film => film.id != id);
  returnData(libraryKey, library);
}
function validCurrentData() {
  let dataFilm = null;
  dataFilm = localStorage.getItem(STORAGE_SELECTED_KEY);
  if (!dataFilm) {
    return;
  }
  try {
    dataFilm = JSON.parse(dataFilm);
  } catch {
    return;
  }
  return dataFilm;
}
function parseData(libraryKey) {
  let library = null;
  library = localStorage.getItem(libraryKey);
  library ? JSON.parse(library) : (library = []);
  return library;
}

function returnData(libraryKey, library) {
  localStorage.setItem(libraryKey, JSON.stringify(library));
}

export default { addCard, delCard };
