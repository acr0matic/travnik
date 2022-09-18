const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',
});

const scrollController = new SmoothScroll('a[href*="#"]', scrollParams);

MicroModal.init(modalParams);