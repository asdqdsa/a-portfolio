/** @type {HTMLElement} themeBtn */
const themeBtn = document.querySelector('#logo');

/** @type {HTMLElement} theme */
const theme = document.querySelector('#root');

const themes = ['dark', 'light', 'gold'];

themeBtn.addEventListener('click', () => {
  if (!theme) return;

  theme.dataset.theme =
    themes[(themes.indexOf(theme.dataset.theme) + 1) % themes.length];
});
