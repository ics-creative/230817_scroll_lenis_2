import Lenis from "@studio-freight/lenis";

export const setupLenis = () => {
  const lenis = new Lenis({
    lerp: 0.2,
    duration: 1,
    easing: easeOutQuart,
    smoothTouch: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

/**
 * イージング関数
 * @see https://easings.net/en
 * @param x 量
 */
const easeOutQuart = (x) => {
  return 1 - Math.pow(1 - x, 4);
};
