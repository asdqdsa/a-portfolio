import { INITIAL_FAQ_ITEM_KEY } from '@/pages/constants';
import { toRem } from '@/shared/utils/lib';

import {
  loadAccordionState,
  resetAccordionState,
  updateAccordionState,
} from '../model/state';

/** @type {HTMLElement} - Root Element */
const root = document.querySelector('#root');
/** @type {HTMLElement} - Accordion Element */
const accordion = root.querySelector('.accordion');

/**
 * @param {HTMLElement} accordionEl
 */
function initAccordionComponent(accordionEl) {
  const { isFirstLoad, activeItemId } = loadAccordionState();

  /** @type {NodeListOf<HTMLElement>} itemList */
  const itemList = accordionEl.querySelectorAll('.accordion__item');
  const initialKey = isFirstLoad ? INITIAL_FAQ_ITEM_KEY : activeItemId;

  itemList.forEach((item) => {
    if (item.dataset.key === initialKey) {
      updateAccordionState({
        activeItemId: item.dataset.key,
      });
      toggleAccordionItem({ mode: 'open', item });
    }
  });

  itemList.forEach((item, _, list) => {
    item.addEventListener('click', () => handleAccordionItemClick(item, list));
  });
}

export const handleAccordionItemClick = (item, list) => {
  const isActive = item.classList.contains('active');
  if (isActive) {
    toggleAccordionItem({ mode: 'close', item });
    resetAccordionState();
  } else {
    list.forEach((item) => {
      toggleAccordionItem({ mode: 'close', item });
    });
    toggleAccordionItem({ mode: 'open', item });
    updateAccordionState({
      activeItemId: item.dataset.key,
    });
  }
};

initAccordionComponent(accordion);

/**
 * @param {{mode: 'open' | 'close', item: HTMLElement}} Params
 */
function toggleAccordionItem({ mode, item }) {
  item.classList.toggle('active', mode === 'open');
  const icon = item.querySelector('.accordion__icon use');

  /** @type {HTMLElement} content */
  const content = item.querySelector('.accordion__content');

  ({
    open: () => {
      content.style.maxHeight = toRem(content.scrollHeight);
      icon.setAttribute(
        'href',
        './src/features/accordion/assets/minus.svg#minus'
      );
    },
    close: () => {
      content.style.maxHeight = '0';
      icon.setAttribute(
        'href',
        './src/features/accordion/assets/plus.svg#plus'
      );
    },
  })[mode]();
}
