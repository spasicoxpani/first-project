let swiper = new Swiper(".mySwiper-specialistes", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".button__next",
        prevEl: ".button__prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
  });