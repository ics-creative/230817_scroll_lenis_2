import { setupLenis } from "./src/scripts/lenis.js";
import { setupBackground } from "./src/scripts/three/setupAnimation.js";
const setup = () => {
  const lenis = setupLenis();

  // アンカーリンクの設定
  const anchor = document.querySelector(".js-anchor");
  anchor.addEventListener("click", () => lenis.scrollTo("#animation"));

  // モーダルの設定
  const openButton = document.querySelector(".js-modal-open-button");
  const closeButton = document.querySelector(".js-modal-close-button");
  const modal = document.querySelector("#modal");
  openButton.addEventListener("click", () => {
    modal.showModal();
    lenis.stop();
  });
  closeButton.addEventListener("click", () => {
    modal.close();
    lenis.start();
  });

  // アニメーションの設定
  setupBackground(lenis);
};

setup();
