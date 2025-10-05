const MOBILE_SCREEN_WIDTH = 768;

/** @param {{root: HTMLElement, node: HTMLElement, styles: any}} node */
export function initMobileMenuComponent({ root, node, styles }) {
  const navList = root.querySelector(styles.cloneFrom);
  const clonedNavList = navList.cloneNode(true);

  node.appendChild(clonedNavList);

  const ul = node.querySelector('ul');
  ul.classList.add(styles.list);
  ul.classList.add(styles.listNav);

  /** @type {HTMLElement} */
  const menuBtn = root.querySelector(styles.menuBtn);

  menuBtn.addEventListener('click', () => {
    const mode = node.classList.contains(styles.active) ? 'close' : 'open';
    toggleMobileMenu({ mode, root, node, styles });
  });

  clonedNavList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () =>
      toggleMobileMenu({ mode: 'close', root, node, styles })
    );
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_SCREEN_WIDTH) {
      toggleMobileMenu({ mode: 'close', root, node, styles });
    }
  });
}

function toggleMobileMenu({ mode, root, node, styles }) {
  ({
    open: () => {
      root.classList.add(styles.disableScroll);
      node.classList.add(styles.active);
    },
    close: () => {
      root.classList.remove(styles.disableScroll);
      node.classList.remove(styles.active);
    },
  })[mode]();
}
