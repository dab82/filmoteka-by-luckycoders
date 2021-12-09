import { STORAGE_SELECTED_KEY } from './common/keys';
function addCard(libraryKey) {
  let library = null;
  const dataFilm = validData(STORAGE_SELECTED_KEY);
  if (!dataFilm) {
    return;
  }
  library = validData(libraryKey);
  if (!library) {
    library = [];
  }
  library.push(...dataFilm);
  returnData(libraryKey, library);
  return true;
}

function delCard(libraryKey) {
  let library = null;
  let id = null;
  id = searchId(STORAGE_SELECTED_KEY);
  if (!id) {
    return;
  }
  library = validData(libraryKey);
  if (!library) {
    library = [];
  }
  console.log('library', library);
  library = library.filter(film => film.id != id);

  returnData(libraryKey, library);
}
function validData(key) {
  let data = null;
  data = localStorage.getItem(key);
  if (!data) {
    return;
  }
  try {
    data = JSON.parse(data);
  } catch {
    return;
  }
  return data;
}

function returnData(libraryKey, library) {
  localStorage.setItem(libraryKey, JSON.stringify(library));
}
function searchId(key) {
  let data = null;
  data = validData(key);
  console.log('data[0]', data[0]['id']);
  return data[0]['id'];
}

export default { addCard, delCard };
