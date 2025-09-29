document.querySelectorAll('.accordion__header').forEach((el) => {
  const item = el.closest('.accordion__item');
  const icon = item.querySelector('.accordion__icon use');

  /** @type {HTMLElement} content */
  const content = item.querySelector('.accordion__content');

  if (item.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight / 16 + 'rem';
    icon.setAttribute('href', '/minus.svg#minus');
  }

  el.addEventListener('click', () => {
    const item = el.closest('.accordion__item');
    const icon = item.querySelector('.accordion__icon use');

    /** @type {HTMLElement} content */
    const content = item.querySelector('.accordion__content');
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight / 16 + 'rem';
      icon.setAttribute('href', '/minus.svg#minus');
    }

    if (item.classList.contains('active')) {
      content.style.maxHeight =
        content.scrollHeight === 0
          ? content.scrollHeight + ''
          : content.scrollHeight / 16 + 'rem';
      icon.setAttribute('href', '/minus.svg#minus');
    } else {
      icon.setAttribute('href', '/plus.svg#plus');
      content.style.maxHeight = '0';
    }
  });
});
