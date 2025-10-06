import { getScrollbarWidth, toRem } from '@/shared/utils/lib';

export const openModal = ({ node, style, root, onKeyDown }) => {
  const scrollBarWidth = getScrollbarWidth();
  node.classList.add(style);
  root.style.paddingInlineEnd = toRem(scrollBarWidth);
  root.classList.add('overflow-hidden');
  document.addEventListener('keydown', onKeyDown);
};

export const closeModal = ({ node, style, root, onKeyDown }) => {
  node.classList.remove(style);
  root.style.paddingInlineEnd = '';
  root.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', onKeyDown);
};

export const onEscape = ({ evt, node, style, config, onClose }) =>
  evt.key === 'Escape' && node.classList.contains(style)
    ? onClose(config)
    : undefined;

export function initModalComponent({ root, node, config }) {
  const bookNowBtns = root.querySelectorAll('[data-id="book-now-btn"]');
  bookNowBtns.forEach((btn) =>
    btn.addEventListener('click', () => openModal(config))
  );

  const closeBtn = node.querySelector('#modal-close-btn');
  closeBtn.addEventListener('click', () => closeModal(config));

  document.addEventListener('keydown', (evt) =>
    onEscape({ evt, ...config, config: config, onClose: closeModal })
  );

  const backdrop = node.querySelector('#modal-backdrop');
  backdrop.addEventListener('click', () => closeModal(config));
}
