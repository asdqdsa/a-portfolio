import { getAccordionState, setAccordionState } from './storage';

/**
 * @typedef {Object} AccordionState
 * @property {string | null} activeItemId
 * @property {boolean} [isFirstLoad]
 */

function initAccordionState() {
  /** @type {AccordionState} State */
  const initialState = {
    activeItemId: null,
    isFirstLoad: true,
  };

  setAccordionState(initialState);
  return initialState;
}

export function loadAccordionState() {
  const stale = getAccordionState();
  const fresh = stale ? { ...stale, isFirstLoad: false } : initAccordionState();
  return fresh;
}

/**
 * @param {AccordionState} State
 */
export function updateAccordionState({ activeItemId }) {
  const stale = loadAccordionState();
  const fresh = { ...stale, activeItemId };
  setAccordionState(fresh);
  return fresh;
}

/**
 * @returns {AccordionState}
 */
export function resetAccordionState() {
  const stale = loadAccordionState();
  const fresh = { ...stale, activeItemId: null };
  setAccordionState(fresh);
  return fresh;
}
