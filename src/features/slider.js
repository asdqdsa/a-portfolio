/** @param {{node: HTMLElement, selectors: any}} zxc */
export function initSliderComponent({ node, selectors }) {
  /** @type {HTMLElement} zxc */
  const leftControl = node.querySelector(selectors.ltCtrl);
  /** @type {HTMLElement} zxc */
  const rightControl = node.querySelector(selectors.rtCtrl);
  const frame = node.querySelector(selectors.frame);

  const STEP = 8;
  const DELAY = 16;

  let timer;

  function handleScrollDesktop({ mode, step, delay }) {
    const direction = mode === 'left' ? -1 : 1;

    clearInterval(timer);
    timer = setInterval(() => {
      frame.scrollLeft += step * direction;
    }, delay);
  }

  function handleScrollStop() {
    clearInterval(timer);
  }

  window.addEventListener('load', () => {
    const center = (frame.scrollWidth - frame.clientWidth) / 2;
    frame.scrollTo({ left: center, behavior: 'smooth' });
  });

  let dragStart = 0;
  let scrollStart = 0;

  frame.addEventListener('touchstart', (e) => {
    dragStart = e.touches[0].clientX;
    scrollStart = frame.scrollLeft;
  });

  frame.addEventListener('touchmove', (e) => {
    const delta = e.touches[0].clientX - dragStart;
    frame.scrollLeft = scrollStart - delta;
  });

  leftControl.addEventListener('mouseenter', () =>
    handleScrollDesktop({ mode: 'left', step: STEP, delay: DELAY })
  );
  rightControl.addEventListener('mouseenter', () =>
    handleScrollDesktop({ mode: 'right', step: STEP, delay: DELAY })
  );

  leftControl.addEventListener('mouseleave', handleScrollStop);
  rightControl.addEventListener('mouseleave', handleScrollStop);
}
