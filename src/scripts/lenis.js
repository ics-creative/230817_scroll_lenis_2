import Lenis from "@studio-freight/lenis";

/**
 * Lenisの初期設定を行います
 */
export const setupLenis = () => {
  const lenis = new Lenis({
    lerp: 0.2, // 慣性の強さ
    duration: 1, // スクロールアニメーションの時間
    easing: easeOutQuart, // イージング関数
    smoothTouch: true, // タッチイベントでも慣性スクロールを有効にする
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
 * @see https://easings.net/ja
 * @param {number} x アニメーションの進行度（正規化された0から1までの値）
 * @return {number} イージングを適用した後の進行度（正規化された0から1までの値）
 */
const easeOutQuart = (x) => {
  return 1 - Math.pow(1 - x, 4);
};
