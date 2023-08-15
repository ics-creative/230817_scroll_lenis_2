import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadModel = () => {
  const gltfLoader = new GLTFLoader();
  return new Promise((resolve) => {
    gltfLoader.load("assets/models/rabbit.glb", (gltf) => {
      resolve(gltf.scene);
    });
  });
};
