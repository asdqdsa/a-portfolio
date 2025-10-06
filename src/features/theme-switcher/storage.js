import { LOCAL_STORAGE_KEY_THEMES } from '@/shared/constants';
import { loadState, saveState } from '@/shared/utils/storage';

/**
 * @typedef {Object} ThemeState
 * @property {'dark' | 'light' | 'gold' | null} activeTheme
 * @property {boolean} [isFirstLoad]
 */

/**
 * @param {ThemeState} state State
 * @returns {void}
 */

export function setThemeState(state) {
  saveState(LOCAL_STORAGE_KEY_THEMES, state);
}

/**
 * @returns {ThemeState | null}
 */
export function getThemeState() {
  return /** @type {ThemeState | null} */ (loadState(LOCAL_STORAGE_KEY_THEMES));
}
