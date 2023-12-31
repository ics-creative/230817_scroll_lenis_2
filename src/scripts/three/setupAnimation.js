import { loadModel } from "./loadModel.js";
import { createEnvironment } from "./createEnvironment";
import { createRenderer } from "./createRenderer";
import { handleResize } from "./handleResize";

export const setupBackground = async (lenis) => {
  const canvas = document.querySelector("canvas.webgl");

  const { scene, camera } = createEnvironment();

  // アニメーションさせるモデル(うさぎ)を読み込む
  const model = await loadModel();
  scene.add(model);

  const renderer = createRenderer(canvas);

  handleResize(camera, renderer);

  const tick = () => {
    // model(うさぎ)の読み込みが完了してからアニメーションを実行する
    if (model) {
      // スクロールの強さに応じてモデルを回転させる
      model.rotation.y += 0.01 + Math.abs(lenis.velocity * 0.005);
      // lenis.velocityをコンソールログで表示
      Math.abs(lenis.velocity) > 0.01 && console.log(lenis.velocity);
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };

  tick();
};
