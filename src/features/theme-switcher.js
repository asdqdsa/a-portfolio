/**
 * @param {{ root: HTMLElement, themeList: string[] }} root Body
 */

export const nextThemeSwitcher = ({ root, themeList }) => {
  if (!root) return null;

  root.dataset.theme =
    themeList[(themeList.indexOf(root.dataset.theme) + 1) % themeList.length];
};
