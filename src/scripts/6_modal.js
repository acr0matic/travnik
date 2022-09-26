const modal = document.getElementById('modal-callback');

if (modal) {
  const form = modal.querySelector('form');
  const title = modal.querySelector('.modal__title');

  const trigger = document.querySelectorAll('[data-micromodal-trigger="modal-callback"]');

  trigger.forEach(button => {
    button.addEventListener('click', () => {
      const subject = button.dataset.subject;

      form.dataset.subject = subject;
      title.innerHTML = subject;
    });
  });
}