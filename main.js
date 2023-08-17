import { setupLenis } from "./src/scripts/lenis.js";
import { setupBackground } from "./src/scripts/three/setupAnimation.js";
const setup = () => {
  // Lenisを設定
  const lenis = setupLenis();

  // アンカーリンクを取得
  const anchor = document.querySelector(".js-anchor");
  // クリック時に目的の箇所までスクロールする
  anchor.addEventListener("click", (e) => {
    // urlを変更しないようにする
    e.preventDefault();
    // スクロール
    lenis.scrollTo("#animation");
  });

  // モーダルを開くボタン
  const openButton = document.querySelector(".js-modal-open-button");
  // モーダルを閉じるボタン
  const closeButton = document.querySelector(".js-modal-close-button");
  // モーダル本体
  const modal = document.querySelector("#modal");

  openButton.addEventListener("click", () => {
    // モーダルを表示する
    modal.showModal();
    // スクロールを止める
    lenis.stop();
  });

  closeButton.addEventListener("click", () => {
    // モーダルを閉じる
    modal.close();
    // スクロールを再開する
    lenis.start();
  });

  // アニメーションの設定
  setupBackground(lenis);
};

setup();
