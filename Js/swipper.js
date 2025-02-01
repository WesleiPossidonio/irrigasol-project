
var swiper = new Swiper(".swiperHero", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiperCards", {
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1040: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiper-objectives", {
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
