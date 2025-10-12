import { setKeyHandler } from '@/shared/utils/key-handler';
import { getScrollbarWidth, toRem } from '@/shared/utils/lib';

export function initModalComponent({ root, node, selectors }) {
  const closeModal = ({ node, selectors, root }) => {
    node.classList.remove(selectors.active);
    root.style.paddingInlineEnd = '';
    root.classList.remove(selectors.overflowHidden);
    esc.unmount();
  };

  const openModal = ({ node, selectors, root }) => {
    const scrollBarWidth = getScrollbarWidth();
    node.classList.add(selectors.active);
    root.style.paddingInlineEnd = toRem(scrollBarWidth);
    root.classList.add(selectors.overflowHidden);
    esc.mount();
  };

  const esc = setKeyHandler({
    key: 'Escape',
    type: 'keydown',
    onKey: () => closeModal({ node, selectors, root }),
  });

  root
    .querySelectorAll(selectors.target)
    .forEach((btn) =>
      btn.addEventListener('click', () => openModal({ node, selectors, root }))
    );

  const closeBtn = node.querySelector(selectors.closeBtn);
  closeBtn.addEventListener('click', () =>
    closeModal({ node, selectors, root })
  );

  const backdrop = node.querySelector(selectors.backdrop);
  backdrop.addEventListener('click', () =>
    closeModal({ node, selectors, root })
  );
}
