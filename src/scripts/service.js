const service = document.getElementById('service');

if (service) {
  const cards = service.querySelectorAll('.service-card');
  cards.forEach(card => {
    const button = card.querySelector('.button');
    const index = button.dataset.index;

    button.addEventListener('click', (e) => {
      SLIDER_SERVICE_CONTENT.slideTo(index);
    });
  });
}