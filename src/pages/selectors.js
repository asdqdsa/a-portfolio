export const SELECTORS = {
  CARD: {
    container: '.pricing__list',
    title: '.card__title',
    list: '.card__list',
    item: '.card__list-item',
    content: '.card__content',
    description: '.card__description',
    footer: '.card__footer',
    price: '.card__price',
    confirmBtn: '.card__confirm-btn',
  },

  MODAL: {
    active: 'modal-active',
    overflowHidden: 'overflow-hidden',
    target: '[data-id="book-now-btn"]',
    closeBtn: '#modal-close-btn',
    backdrop: '#modal-backdrop',
  },

  ACCORDION: {
    item: '.accordion__item',
    active: 'accordion__item-active',
    icon: '.accordion__icon use',
    content: '.accordion__content',
    header: '.accordion__header',
  },

  MOBILE_MENU: {
    cloneFrom: '#list-nav',
    menuBtn: '#mobile-menu-btn',
    active: 'mobile-menu-active',
    list: 'list-mobile',
    listNav: 'list-nav-mobile',
    disableScroll: 'overflow-hidden',
    burgerBtn: '.burger-btn',
    burgerBtnActive: 'burger-btn-active',
  },

  SLIDER: {
    root: '.slider',
    ltCtrl: '.slider__controls_lt',
    rtCtrl: '.slider__controls_rt',
    frame: '.slider__frame',
  },
};
