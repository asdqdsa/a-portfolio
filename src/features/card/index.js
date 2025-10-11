import { cardsData } from './data';

export function initCardsComponent({ root, node, selectors }) {
  const fragment = document.createDocumentFragment();
  const container = root.querySelector(selectors.container);

  cardsData.forEach((data) => {
    const card = node.cloneNode(true);
    makeCard({ el: card, data, selectors });
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function makeCard({ el, data, selectors }) {
  const { title, price, description, confirmBtn, details } = data;
  el.querySelector(selectors.title).textContent = title;
  el.querySelector(selectors.price).textContent = price;
  el.querySelector(selectors.description).textContent = description;
  el.querySelector(selectors.confirmBtn).textContent = confirmBtn;

  const list = el.querySelector(selectors.list);
  const itemTemplate = list.querySelector(selectors.item);

  list.replaceChildren();

  details.forEach((entry) => {
    const item = itemTemplate.cloneNode(true);
    item.textContent = entry;
    list.append(item);
  });
}
