const MOBILE_SCREEN_WIDTH = 768;

/** @param {{root: HTMLElement, node: HTMLElement, styles: any}} node */
export function initMobileMenuComponent({ root, node, styles: selectors }) {
  const navList = root.querySelector(selectors.cloneFrom);
  const clonedNavList = navList.cloneNode(true);

  node.appendChild(clonedNavList);

  const ul = node.querySelector('ul');
  ul.classList.add(selectors.list);
  ul.classList.add(selectors.listNav);

  /** @type {HTMLElement} */
  const menuBtn = root.querySelector(selectors.menuBtn);
  const burgerBtn = root.querySelector(selectors.burgerBtn);

  menuBtn.addEventListener('click', () => {
    const mode = node.classList.contains(selectors.active) ? 'close' : 'open';
    burgerBtn.classList.toggle(selectors.burgerBtnActive);
    toggleMobileMenu({ mode, root, node, styles: selectors });
  });

  clonedNavList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileMenu({ mode: 'close', root, node, styles: selectors });
    });
  });

  window.addEventListener('resize', () => {
    const mode = node.classList.contains(selectors.active) ? 'close' : 'open';
    if (window.innerWidth > MOBILE_SCREEN_WIDTH && mode === 'close') {
      toggleMobileMenu({ mode: 'close', root, node, styles: selectors });
    }
  });
}

function toggleMobileMenu({ mode, root, node, styles: selectors }) {
  const burgerBtn = root.querySelector(selectors.burgerBtn);
  ({
    open: () => {
      root.classList.add(selectors.disableScroll);
      node.classList.add(selectors.active);
      burgerBtn.classList.add(selectors.burgerBtnActive);
    },
    close: () => {
      root.classList.remove(selectors.disableScroll);
      node.classList.remove(selectors.active);
      burgerBtn.classList.remove(selectors.burgerBtnActive);
    },
  })[mode]();
}
