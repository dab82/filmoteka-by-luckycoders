let library = null;
let dataFilm = null;
export function onAddLibStorage(filmKey, libraryKey) {
  dataFilm = localStorage.getItem(filmKey);
  if (!dataFilm) {
    return;
  }
  try {
    dataFilm = JSON.parse(dataFilm);
  } catch {
    return;
  }
  library = localStorage.getItem(libraryKey);
  library ? JSON.parse(library) : (library = []);
  library.push(dataFilm);
  localStorage.setItem(libraryKey, library);
}
