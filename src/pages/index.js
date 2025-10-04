import '@/features/accordion';
import { closeModal, openModal } from '@/features/modal';
import { nextThemeSwitcher } from '@/features/theme-switcher';
import { STYLE_CONSTANTS, THEMES } from '@/pages/constants';

/** @type {HTMLElement} */
const root = document.querySelector('#root');
const bookNowBtns = /** @type {NodeListOf<HTMLButtonElement>} */ (
  root.querySelectorAll('[data-id="book-now-btn"]')
);
const modal = /** @type {HTMLDivElement} */ (root.querySelector('#modal'));
const closeBtn = modal.querySelector('#modal-close-btn');
const backdrop = modal.querySelector('#modal-backdrop');

const modalConfig = {
  node: modal,
  style: STYLE_CONSTANTS.MODAL_ACTIVE,
  root,
  onKeyDown: (e) =>
    e.key === 'Escape' && modal.classList.contains(STYLE_CONSTANTS.MODAL_ACTIVE)
      ? closeModal(modalConfig)
      : undefined,
};

bookNowBtns.forEach((btn) =>
  btn.addEventListener('click', () => openModal(modalConfig))
);
closeBtn.addEventListener('click', () => closeModal(modalConfig));
backdrop.addEventListener('click', () => closeModal(modalConfig));

/** @type {HTMLElement} themeBtn */
const themeBtn = document.querySelector('#logo');

themeBtn.addEventListener('click', () =>
  nextThemeSwitcher({ root, themeList: THEMES })
);
