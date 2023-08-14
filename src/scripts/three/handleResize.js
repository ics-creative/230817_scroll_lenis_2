export const handleResize = (camera, renderer) => {
  window.addEventListener("resize", () => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
};
