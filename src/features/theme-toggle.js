/** @type {HTMLElement} themeBtn */
const themeBtn = document.querySelector('#logo');

/** @type {HTMLElement} theme */
const theme = document.querySelector('#root');

themeBtn.addEventListener('click', () => {
  if (!theme) return;
  theme.dataset.theme = theme.dataset.theme === 'dark' ? 'gold' : 'dark';
});
