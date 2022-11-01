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
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    540: {
      slidesPerView: 1.6,
    },

    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },

    1800: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: '.slider-service .swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.service .slider .swiper-button-next',
    prevEl: '.service .slider .swiper-button-prev',
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
  allowTouchMove: false,
  autoHeight: true,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  a11y: {
    enabled: false,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const SLIDER_BLOG = new Swiper('.slider-blog', {
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    540: {
      slidesPerView: 1.6,
    },

    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },

    1800: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: '.slider-blog .swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.blog .slider .swiper-button-next',
    prevEl: '.blog .slider .swiper-button-prev',
  },

  a11y: {
    enabled: false,
  },

  on: {
    afterInit: (instance) => {
      const container = instance.el
      const cards = container.querySelectorAll('.card');

      cards.forEach((card, index) => card.dataset.index = index);
    }
  }
});

const SLIDER_BLOG_CONTENT = new Swiper('.slider-blog-content', {
  speed: 800,
  slidesPerView: 1,
  simulateTouch: false,
  allowTouchMove: false,
  autoHeight: true,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  a11y: {
    enabled: false,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

if (isMobile) {
  const SLIDER_GALLERY = new Swiper('.slider-gallery', {
    slidesPerView: 1.06,

    a11y: {
      enabled: false,
    },
  });
}