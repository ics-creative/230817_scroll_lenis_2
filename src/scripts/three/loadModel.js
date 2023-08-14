import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadModel = () => {
  const gltfLoader = new GLTFLoader();
  return new Promise((resolve) => {
    gltfLoader.load("/models/rabbit.glb", (gltf) => {
      resolve(gltf.scene);
    });
  });
};
