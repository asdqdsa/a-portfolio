import '@/features/theme-toggle';
import '@/features/accordion';
import '@/features/modal';
import { closeModal, openModal } from '@/features/modal';
import { STYLE_CONSTANTS } from '@/pages/constants';

const bookNowBtns = document.querySelectorAll('[data-id="book-now-btn"]');
const modal = document.querySelector('#modal');
const root = document.querySelector('#root');
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
