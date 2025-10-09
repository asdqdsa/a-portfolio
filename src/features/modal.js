import { setKeyHandler } from '@/shared/utils/key-handler';
import { getScrollbarWidth, toRem } from '@/shared/utils/lib';

export function initModalComponent({ root, node, style }) {
  const closeModal = ({ node, style, root }) => {
    node.classList.remove(style.active);
    root.style.paddingInlineEnd = '';
    root.classList.remove(style.overflowHidden);
    esc.unmount();
  };

  const openModal = ({ node, style, root }) => {
    const scrollBarWidth = getScrollbarWidth();
    node.classList.add(style.active);
    root.style.paddingInlineEnd = toRem(scrollBarWidth);
    root.classList.add(style.overflowHidden);
    esc.mount();
  };

  const esc = setKeyHandler({
    key: 'Escape',
    type: 'keydown',
    cb: () => closeModal({ node, style, root }),
  });

  root
    .querySelectorAll(style.target)
    .forEach((btn) =>
      btn.addEventListener('click', () => openModal({ node, style, root }))
    );

  const closeBtn = node.querySelector(style.closeBtn);
  closeBtn.addEventListener('click', () => closeModal({ node, style, root }));

  const backdrop = node.querySelector(style.backdrop);
  backdrop.addEventListener('click', () => closeModal({ node, style, root }));
}
