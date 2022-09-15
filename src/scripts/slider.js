const SLIDER_HERO = new Swiper('.slider-hero', {
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

  a11y: {
    enabled: false,
  },

  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
});

const SLIDER_SERVICE = new Swiper('.slider-service', {
  speed: 300,
  slidesPerView: 'auto',

  pagination: {
    el: '.slider-service .swiper-pagination',
    clickable: true,
  },

  a11y: {
    enabled: false,
  },

  on: {
    afterInit: (instance) => {
      const container = instance.el
      const buttons = container.querySelectorAll('.card__action .button');

      buttons.forEach((button, index) => button.dataset.index = index);
    }
  }
});

const SLIDER_SERVICE_CONTENT = new Swiper('.slider-service-content', {
  speed: 800,
  slidesPerView: 1,
  simulateTouch: false,

  a11y: {
    enabled: false,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});