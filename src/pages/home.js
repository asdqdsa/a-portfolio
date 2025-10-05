import { initAccordionComponent } from '@/features/accordion';
import { initMobileMenuComponent } from '@/features/mobile-menu';
import { closeModal, onEscape, openModal } from '@/features/modal';
import { nextThemeSwitcher } from '@/features/theme-switcher';
import { STYLE_CONSTANTS, THEMES } from '@/pages/constants';

/** @type {HTMLElement} - Root Element */
const root = document.querySelector('#root');

/** @type {HTMLElement} - Modal Element */
const modal = root.querySelector('#modal');
const modalConfig = {
  node: modal,
  style: STYLE_CONSTANTS.MODAL_ACTIVE,
  root,
  onKeyDown: onEscape,
};

const bookNowBtns = root.querySelectorAll('[data-id="book-now-btn"]');
bookNowBtns.forEach((btn) =>
  btn.addEventListener('click', () => openModal(modalConfig))
);

const closeBtn = modal.querySelector('#modal-close-btn');
closeBtn.addEventListener('click', () => closeModal(modalConfig));

document.addEventListener('keydown', (evt) =>
  onEscape({ evt, ...modalConfig, config: modalConfig, onClose: closeModal })
);

const backdrop = modal.querySelector('#modal-backdrop');
backdrop.addEventListener('click', () => closeModal(modalConfig));

/** @type {HTMLElement} - Theme Button Element */
const themeBtn = document.querySelector('#logo');
themeBtn.addEventListener('click', () =>
  nextThemeSwitcher({ root, themeList: THEMES })
);

/** @type {HTMLElement} - Accordion Element */
const accordion = root.querySelector('.accordion');
initAccordionComponent({
  node: accordion,
  accordionStyle: STYLE_CONSTANTS.ACCORDION,
});

/** @type {HTMLElement} - Nav-list Element */
const mobileMenu = root.querySelector('#mobile-menu');
initMobileMenuComponent({
  root,
  node: mobileMenu,
  styles: STYLE_CONSTANTS.MOBILE_MENU,
});
