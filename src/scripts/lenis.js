import Lenis from "@studio-freight/lenis";

/**
 * Lenisの初期設定を行います
 */
export const setupLenis = () => {
  const lenis = new Lenis({
    lerp: 0.2, // 慣性の強さ
    duration: 1, // スクロールアニメーションの時間
    easing: easeOutQuart, // イージング関数
    smoothTouch: true, // タッチイベントでも慣性スクロールをonにする
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
