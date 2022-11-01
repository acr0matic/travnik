const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',
});

const scrollController = new SmoothScroll('a[href*="#"]', scrollParams);

MicroModal.init(modalParams);

const tooltip = tippy('[data-tippy-content]', {
  allowHTML: true,
  maxWidth: 320,
  placement: 'right',
  theme: 'flat',
  offset: [0, 15],
});

const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

const accordion = document.querySelectorAll('.handorgel')
accordion.forEach(item => new handorgel(item));
