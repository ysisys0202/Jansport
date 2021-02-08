window.addEventListener("load", () => {
  const mainSlide = new Swiper(".main-slide", {
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: { delay: 3000 },
  });
  const contentSlide = new Swiper(".content-slide", {
    slidesPerView: 4,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggerbal: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
});
