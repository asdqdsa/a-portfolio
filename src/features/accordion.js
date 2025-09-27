document.querySelectorAll('.accordion__header').forEach((el) => {
  el.addEventListener('click', () => {
    const item = el.closest('.accordion__item');
    const icon = item.querySelector('.accordion__icon use');

    /** @type {HTMLElement} content */
    const content = item.querySelector('.accordion__content');
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      icon.setAttribute('href', '/minus.svg#minus');

      content.style.maxHeight =
        content.scrollHeight === 0
          ? content.scrollHeight + ''
          : content.scrollHeight / 16 + 'rem';
    } else {
      icon.setAttribute('href', '/plus.svg#plus');
      content.style.maxHeight = '0';
    }
  });
});
