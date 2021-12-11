import { STORAGE_MAIN_KEY } from '../common/keys';

export function setDataToStorageForMain(formattedData) {
  localStorage.setItem(STORAGE_MAIN_KEY, JSON.stringify(formattedData));
}
