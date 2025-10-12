import { toRem } from '@/shared/utils/lib';
import { INITIAL_FAQ_ITEM_KEY } from '@/shared/constants';

import {
  loadAccordionState,
  resetAccordionState,
  updateAccordionState,
} from './state';
import { accordionData } from './data';

export function initAccordionComponent({ root, node, selectors }) {
  const { isFirstLoad, activeItemId } = loadAccordionState();

  const fragment = document.createDocumentFragment();
  const container = root.querySelector(selectors.container);
  const itemNode = node.querySelector(selectors.item);

  accordionData.forEach((data) => {
    const item = itemNode.cloneNode(true);
    makeAccortdionItem({ el: item, data, selectors });
    fragment.appendChild(item);
  });

  node.replaceChildren(fragment);
  container.appendChild(node);

  const itemList = node.querySelectorAll(selectors.item);

  syncAccordionState({
    node: itemList,
    initialKey: isFirstLoad ? INITIAL_FAQ_ITEM_KEY : activeItemId,
    selectors,
  });

  bindAccordionEvents({ node: itemList, selectors });
}

function syncAccordionState({ node, initialKey, selectors }) {
  node.forEach((item) => {
    if (item.dataset.key === initialKey) {
      updateAccordionState({
        activeItemId: item.dataset.key,
      });
      toggleAccordionItem({ mode: 'open', item, selectors });
    }
  });
}

function makeAccortdionItem({ el, data, selectors }) {
  const { title, content, id } = data;

  el.querySelector(selectors.title).textContent = title;
  el.querySelector(selectors.description).textContent = content;
  el.dataset.key = id;
}

function bindAccordionEvents({ node, selectors }) {
  node.forEach((item, _, list) => {
    const itemHeader = item.querySelector(selectors.header);
    itemHeader.addEventListener('click', () =>
      handleAccordionItemClick(item, list, selectors)
    );
  });
}

function handleAccordionItemClick(item, list, selectors) {
  const isActive = item.classList.contains(selectors.active);
  if (isActive) {
    toggleAccordionItem({ mode: 'close', item, selectors });
    resetAccordionState();
  } else {
    list.forEach((item) => {
      toggleAccordionItem({ mode: 'close', item, selectors });
    });

    toggleAccordionItem({ mode: 'open', item, selectors });
    updateAccordionState({
      activeItemId: item.dataset.key,
    });
  }
}

function toggleAccordionItem({ mode, item, selectors }) {
  item.classList.toggle(selectors.active, mode === 'open');
  const icon = item.querySelector(selectors.icon);
  const content = item.querySelector(selectors.content);

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
