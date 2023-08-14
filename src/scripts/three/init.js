import * as THREE from "three";
import { loadModel } from "./loadModel.js";

export const init = async (lenis) => {
  // THREE.ColorManagement.enabled = false
  /**
   * Base
   */
  // Debug
  //   const gui = new dat.GUI()

  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  const model = await loadModel();
  scene.add(model);

  /**
   * Lights
   */
  const ambientLight = new THREE.AmbientLight(0xffffff, 5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.shadow.camera.far = 15;
  dirLight.shadow.camera.left = -7;
  dirLight.shadow.camera.top = 7;
  dirLight.shadow.camera.right = 7;
  dirLight.shadow.camera.bottom = -7;
  dirLight.position.set(-5, 5, 2);
  scene.add(dirLight);

  const dirLight2 = dirLight.clone();
  dirLight2.position.set(5, 5, 2);
  scene.add(dirLight2);

  const dirLight3 = dirLight.clone();
  dirLight3.position.set(0, 5, 5);
  scene.add(dirLight3);

  const dirLight4 = dirLight.clone();
  dirLight4.position.set(0, 0, 5);
  scene.add(dirLight4);

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100,
  );
  camera.position.set(0, 2, 10);
  scene.add(camera);

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  // const clock = new THREE.Clock()
  // let previousTime = 0

  const tick = () => {
    // const elapsedTime = clock.getElapsedTime()
    // const deltaTime = elapsedTime - previousTime
    // previousTime = elapsedTime

    if (model) {
      model.rotation.y += 0.01 + Math.abs(lenis.velocity * 0.005);

      // console.log(window.scrollY);

      if (window.scrollY < sizes.height * 1.5) {
        if (model.position.x <= 3) {
          model.position.x += Math.abs(lenis.velocity * 0.005);
        }
      } else if (window.scrollY < sizes.height * 2.5) {
        if (model.position.x >= -3) {
          model.position.x -= Math.abs(lenis.velocity * 0.01);
        }
      }
    }

    // Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();

  // animateModel(model);
};
