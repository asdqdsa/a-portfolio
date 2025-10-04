import { INITIAL_FAQ_ITEM_KEY } from '@/pages/constants';
import { toRem } from '@/shared/utils/lib';

import {
  loadAccordionState,
  resetAccordionState,
  updateAccordionState,
} from '../model/state';

export function initAccordionComponent({ node, accordionStyle }) {
  const { isFirstLoad, activeItemId } = loadAccordionState();

  const itemList = node.querySelectorAll(accordionStyle.item);
  const initialKey = isFirstLoad ? INITIAL_FAQ_ITEM_KEY : activeItemId;

  itemList.forEach((item) => {
    if (item.dataset.key === initialKey) {
      updateAccordionState({
        activeItemId: item.dataset.key,
      });
      toggleAccordionItem({ mode: 'open', item, style: accordionStyle });
    }
  });

  itemList.forEach((item, _, list) => {
    item.addEventListener('click', () =>
      handleAccordionItemClick(item, list, accordionStyle)
    );
  });
}

function handleAccordionItemClick(item, list, style) {
  const isActive = item.classList.contains(style.active);
  if (isActive) {
    toggleAccordionItem({ mode: 'close', item, style });
    resetAccordionState();
  } else {
    list.forEach((item) => {
      toggleAccordionItem({ mode: 'close', item, style });
    });

    toggleAccordionItem({ mode: 'open', item, style });
    updateAccordionState({
      activeItemId: item.dataset.key,
    });
  }
}

function toggleAccordionItem({ mode, item, style }) {
  item.classList.toggle(style.active, mode === 'open');
  const icon = item.querySelector(style.icon);
  const content = item.querySelector(style.content);

  ({
    open: () => {
      content.style.maxHeight = toRem(content.scrollHeight);
      icon.setAttribute('href', '/minus.svg#minus');
    },
    close: () => {
      content.style.maxHeight = '0';
      icon.setAttribute('href', '/plus.svg#plus');
    },
  })[mode]();
}
