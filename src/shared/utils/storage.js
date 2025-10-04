/**
 * Saves value to local storage.
 * @param {string} storageKey - Storage key.
 * @param {*} state - Value.
 * @returns {void}
 */

export const saveState = (storageKey, state) => {
  localStorage.setItem(storageKey, JSON.stringify(state));
};

/**
 * Gets value from local storage.
 * @param {string} storageKey - Storage key.
 * @returns {unknown | null }
 */
export const loadState = (storageKey) => {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    console.warn(`Failed to parse ${storageKey}`);
    return null;
  }
};

/**
 * Removes value from local storage.
 * @param {string} storageKey - Storage key.
 * @returns {void}
 */
export const clearState = (storageKey) => {
  localStorage.removeItem(storageKey);
};
