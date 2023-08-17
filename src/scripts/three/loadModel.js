import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const loadModel = async () => {
  const gltfLoader = new GLTFLoader();
  const model = await gltfLoader.loadAsync("assets/models/rabbit.glb");
  return model.scene;
};
