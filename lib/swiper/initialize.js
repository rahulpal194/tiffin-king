
var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  breakpoints: {
     400:{
      slidesPerView: 2,
      spaceBetween: 16,
     },
     640: {
       slidesPerView: 3,
       spaceBetween: 24,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 24,
     },
     1024: {
       slidesPerView: 6,
       spaceBetween: 24,
     },
    },
});