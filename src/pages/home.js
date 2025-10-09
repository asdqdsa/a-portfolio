import { initAccordionComponent } from '@/features/accordion';
import { initMobileMenuComponent } from '@/features/mobile-menu';
import { initModalComponent } from '@/features/modal';
import { initSliderComponent } from '@/features/slider';
import { initThemeSwitcher } from '@/features/theme-switcher';
import { SELECTORS } from '@/pages/selectors';
import { THEMES } from '@/shared/constants';

/** @type {HTMLElement} - Root Element */
const root = document.querySelector('#root');

/** @type {HTMLElement} - Theme Switcher Element */
const themeSwitchBtn = document.querySelector('#logo');
themeSwitchBtn &&
  initThemeSwitcher({ root, node: themeSwitchBtn, themeList: THEMES });

/** @type {HTMLElement} - Accordion Element */
const accordion = root.querySelector('.accordion');
accordion &&
  initAccordionComponent({
    node: accordion,
    accordionStyle: SELECTORS.ACCORDION,
  });

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

/** @type {HTMLTemplateElement} - Modal Template Element */
const modalTemplate = document.querySelector('#modal-template');
const modal = modalTemplate?.content.firstElementChild.cloneNode(true);
modal &&
  root.appendChild(modal) &&
  initModalComponent({
    root,
    node: modal,
    style: SELECTORS.MODAL,
  });
