"use strict";
{
  const video = document.querySelector(".video");
  const jansportVideo = document.querySelector(".jansport-video");
  let flag = true;

  const scrollHandler = () => {
    const startPosition = video.offsetTop - window.innerHeight;
    if (flag && window.pageYOffset > startPosition) {
      jansportVideo.setAttribute(
        "src",
        "https://www.youtube.com/embed/2y24JbAnirc?si=zb-GQV1wqFPJ6Q2l&autoplay=1&mute=1"
      );
      flag = false;
    }
    console.log(flag);
  };
  window.addEventListener("scroll", scrollHandler);
}
