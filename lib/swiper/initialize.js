const menuSwiper = new Swiper(".category-swiper", {
    slidesPerView: "2",
    spaceBetween: 16,
    loop: true,
  breakpoints: {
      0: {
          slidesPerView: "auto",
          spaceBetween: 16,
          loop: true,
      },
      900: {
          slidesPerView: "auto",
          spaceBetween: 24,
          loop: true,
      },
      1280: {
          slidesPerView: 5,
          spaceBetween: 24,
      }
  }
})