const swiper = new Swiper('.slider-hero', {
  speed: 800,
  simulateTouch: false,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.slider-hero .swiper-pagination',
    clickable: true,
  },

  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
});