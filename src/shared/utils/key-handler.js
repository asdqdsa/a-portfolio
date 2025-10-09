export const setKeyHandler = ({
  key = 'Escape',
  type = 'keydown',
  cb = () => {},
}) => {
  const handler = (evt) => evt.key === key && cb();

  return {
    mount: () => document.addEventListener(type, handler),
    unmount: () => document.removeEventListener(type, handler),
  };
};
