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
  const contentSlide1 = new Swiper(".content-slide1", {
    scrollbar: {
      el: ".swiper-scrollbar",
      draggerbal: true,
    },
    loop: false,
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 1,
      },
    },
  });
  const contentSlide2 = new Swiper(".content-slide2", {
    scrollbar: {
      el: ".swiper-scrollbar",
      draggerbal: true,
    },
    loop: true,

    breakpoints: {
      1025: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 2,
      },
    },
  });
});
