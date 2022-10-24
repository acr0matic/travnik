const service = document.getElementById('service');

if (service) {
  const collapse = service.querySelector('.content-collapse');

  const cards = service.querySelectorAll('.service-card');
  cards.forEach(card => {
    const button = card.querySelector('.button');
    const index = button.dataset.index;

    button.addEventListener('click', (e) => {
      SLIDER_SERVICE_CONTENT.slideTo(index);
      collapse.classList.remove('content-collapse--hidden');
    });
  });

  const content = service.querySelector('.service__content');
  if (content) {
    const items = content.querySelectorAll('.service-item');

    items.forEach(item => {
      const title = item.querySelector('.service-item__title').innerHTML;
      const button = item.querySelector('[data-micromodal-trigger]');

      button.addEventListener('click', () => {
        const modal = document.getElementById(button.dataset.micromodalTrigger)
        modal.querySelector('.modal__title').innerHTML = title;
      });
    });
  }
}