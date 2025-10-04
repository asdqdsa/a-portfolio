import { LOCAL_STORAGE_KEY_ACCORDION } from '@/pages/constants';
import { loadState, saveState } from '@/shared/utils';

/**
 * @typedef {Object} AccordionState
 * @property {string | null} activeItemId
 * @property {boolean} [isFirstLoad]
 */

/**
 * @param {AccordionState} state State
 * @returns {void}
 */
export function setAccordionState(state) {
  saveState(LOCAL_STORAGE_KEY_ACCORDION, state);
}

/**
 * @returns {AccordionState | null}
 */
export function getAccordionState() {
  return /** @type {AccordionState | null} */ (
    loadState(LOCAL_STORAGE_KEY_ACCORDION)
  );
}
