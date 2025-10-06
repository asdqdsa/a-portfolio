export const SELECTORS = {
  MODAL_ACTIVE: 'modal-active',
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
  },

  SLIDER: {
    root: '.slider',
    ltCtrl: '.slider__controls_lt',
    rtCtrl: '.slider__controls_rt',
    frame: '.slider__frame',
  },
};

export const THEMES = ['dark', 'light', 'gold'];

export const LOCAL_STORAGE_KEY_ACCORDION = 'accordion-state-888';

export const INITIAL_FAQ_ITEM_KEY = 'faq-1';

export const BASE_FONT_SIZE = 16;
