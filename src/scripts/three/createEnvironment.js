import * as THREE from "three";

export const createEnvironment = () => {
  const scene = new THREE.Scene();

  scene.add(...createLights(scene));
  const camera = createCamera(scene);
  scene.add(camera);

  return { scene, camera };
};

const createLights = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 5);

  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.shadow.camera.far = 15;
  dirLight.shadow.camera.left = -7;
  dirLight.shadow.camera.top = 7;
  dirLight.shadow.camera.right = 7;
  dirLight.shadow.camera.bottom = -7;
  dirLight.position.set(-5, 5, 2);

  const dirLight2 = dirLight.clone();
  dirLight2.position.set(5, 5, 2);

  const dirLight3 = dirLight.clone();
  dirLight3.position.set(0, 5, 5);

  const dirLight4 = dirLight.clone();
  dirLight4.position.set(0, 0, 5);
  return [ambientLight, dirLight, dirLight2, dirLight3, dirLight4];
};

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.set(0, 2, 10);
  return camera;
};
