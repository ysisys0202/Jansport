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
        "https://www.youtube.com/embed/QrWG7q4Epi8?autoplay=1&mute=1;",
      );
      flag = false;
    }
  };
  window.addEventListener("scroll", scrollHandler);
}
