const service = document.getElementById('service');

if (service) {
  const collapse = service.querySelector('.content-collapse');

  const cards = service.querySelectorAll('.service-card');
  cards.forEach(card => {
    const button = card.querySelector('.button');
    const index = button.dataset.index;

    button.addEventListener('click', (e) => {
      const active = service.querySelector('.card--active');
      if (active) active.classList.remove('card--active');

      card.classList.add('card--active');

      SLIDER_SERVICE_CONTENT.slideTo(index);
      collapse.classList.remove('content-collapse--hidden');
    });
  });
}