export function addMod(btn, mod) {
  btn.classList.remove(`remove-from-${mod}`);
  btn.classList.remove("button-active");
  btn.textContent = `add to ${mod}`;
  btn.classList.add(`add-to-${mod}`);
}
export function removeMod(btn, mod) {
  btn.classList.remove(`add-to-${mod}`);
  btn.textContent = `remove from ${mod}`;
  btn.classList.add(`remove-from-${mod}`);
  btn.classList.add("button-active");
}
