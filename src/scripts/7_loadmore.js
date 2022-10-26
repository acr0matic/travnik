
const ajaxButton = document.querySelectorAll('[data-handler=ajax]');

ajaxButton.forEach(button => {
  button.addEventListener('click', () => {
    const defaultText = button.innerHTML;

    const container = button.closest('[data-parent]').querySelector('[data-container]');
    const target = button.dataset.target;
    const page = button.dataset.paged;
    const maxpage = button.dataset.maxPages;

    const data = new FormData();

    data.append('action', 'more_post_ajax');
    data.append('target', target);
    data.append('page', page);

    AJAX();

    async function AJAX() {
      try {
        button.setAttribute('disabled', 'disabled');
        button.innerHTML = "Загружается...";

        let response = await fetch(backend.ajaxurl, {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          button.dataset.paged++;

          if (button.dataset.paged != maxpage) {
            button.removeAttribute('disabled');
            button.innerHTML = defaultText;
          }

          else {
            button.innerHTML = "Больше ничего нет";
            button.style.display = 'none';
          }
        }

        let result = await response.text();
        container.insertAdjacentHTML('beforeend', result);

        if (target === 'service') {
          accordion = document.querySelectorAll('.handorgel');
          accordion.forEach(instance => new handorgel(instance, { ariaEnabled: false, }));
        }
      }

      // Логируем ошибку, если возникла
      catch (error) {
        console.error('Ошибка - ' + error);
      }
    }
  });
});


