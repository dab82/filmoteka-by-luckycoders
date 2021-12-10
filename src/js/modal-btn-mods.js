export function addMod(btn, mod) {
  btn.classList.remove(`remove-from-${mod}`);
  btn.textContent = `add from ${mod}`;
  btn.classList.add(`add-to-${mod}`);
}
export function removeMod(btn, mod) {
  btn.classList.remove(`add-to-${mod}`);
  btn.textContent = `remove from ${mod}`;
  btn.classList.add(`remove-from-${mod}`);
}
