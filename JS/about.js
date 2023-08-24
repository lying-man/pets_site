"use strict";

const swiper = new Swiper('.swiper', {
    touchEventsTarget: "container",
    speed: 300,
    longSwipesRatio: 0.3,
    loop: false,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    breakpoints: {
      320: {
        spaceBetween: 16,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      746: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      962: {
        spaceBetween: 77,
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    },
});

