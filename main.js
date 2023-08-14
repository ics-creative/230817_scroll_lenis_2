import { setupLenis } from "./src/scripts/lenis.js";
import { init } from "./src/scripts/three/init.js";
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

  init(lenis);

  // const log = () => {
  //   console.log(lenis.animatedScroll, lenis.velocity)
  //   window.requestAnimationFrame(log);
  // }

  // log();

  // window.requestAnimationFrame(() => {
  //   console.log(lenis.animatedScroll, lenis.velocity)
  // })
};

setup();
