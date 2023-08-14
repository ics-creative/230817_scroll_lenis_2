export const animateModel = () => {
  let lastKnownScrollPosition = 0;
  let speed = 0;
  let id = null;
  const INVERTEL = 50;

  const animate = () => {
    console.log(lastKnownScrollPosition, speed);
    id = null;
  };

  // function doSomething(scrollPos) {
  //   console.log("pos: ", scrollPos);
  //   // 子のスクロール位置で何かを行う
  // }

  const onScroll = () => {
    if (id !== null) return;

    speed = lastKnownScrollPosition - window.scrollY;
    lastKnownScrollPosition = window.scrollY;
    id = setTimeout(animate, INVERTEL);
  };

  document.addEventListener("scroll", onScroll);
};
