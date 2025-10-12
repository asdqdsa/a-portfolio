import { initAccordionComponent } from '@/features/accordion';
import { initCardsComponent } from '@/features/cards';
import { initMobileMenuComponent } from '@/features/mobile-menu';
import { initModalComponent } from '@/features/modal';
import { initSliderComponent } from '@/features/slider';
import { initThemeSwitcher } from '@/features/theme-switcher';
import { THEMES } from '@/features/theme-switcher/constants';

import { SELECTORS } from './selectors';

/** @type {HTMLElement} - Root Element */
const root = document.querySelector('#root');

/** @type {HTMLElement} - Theme Switcher Element */
const themeSwitchBtn = document.querySelector('#logo');
themeSwitchBtn &&
  initThemeSwitcher({ root, node: themeSwitchBtn, themeList: THEMES });

/** @type {HTMLElement} - Nav-list Element */
const mobileMenu = root.querySelector('#mobile-menu');
mobileMenu &&
  initMobileMenuComponent({
    root,
    node: mobileMenu,
    styles: SELECTORS.MOBILE_MENU,
  });

/** @type {HTMLElement} Slider Element */
const slider = root.querySelector('.slider');
slider &&
  initSliderComponent({
    node: slider,
    selectors: SELECTORS.SLIDER,
  });

/** @type {HTMLTemplateElement} - Accordion Template Element */
const accordionTemplate = document.querySelector('#accordion-template');
const accordion = accordionTemplate?.content.firstElementChild;

accordion &&
  initAccordionComponent({
    root,
    node: accordion,
    selectors: SELECTORS.ACCORDION,
  });

/** @type {HTMLTemplateElement} - Card Template Element */
const cardTemplate = document.querySelector('#card-template');
const card = cardTemplate?.content.firstElementChild;
card && initCardsComponent({ root, node: card, selectors: SELECTORS.CARD });

/** @type {HTMLTemplateElement} - Modal Template Element */
const modalTemplate = document.querySelector('#modal-template');
const modal = modalTemplate?.content.firstElementChild.cloneNode(true);
modal &&
  root.appendChild(modal) &&
  initModalComponent({
    root,
    node: modal,
    selectors: SELECTORS.MODAL,
  });
