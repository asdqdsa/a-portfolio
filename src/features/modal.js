export const openModal = ({ node, style, root, onKeyDown }) => {
  node.classList.add(style);
  root.classList.add('overflow-hidden');
  document.addEventListener('keydown', onKeyDown);
};

export const closeModal = ({ node, style, root, onKeyDown }) => {
  node.classList.remove(style);
  root.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', onKeyDown);
};

export const onEscape = ({ evt, node, style, config, onClose }) =>
  evt.key === 'Escape' && node.classList.contains(style)
    ? onClose(config)
    : undefined;
