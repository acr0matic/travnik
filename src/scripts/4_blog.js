const blog = document.getElementById('blog');

if (blog) {
  const collapse = blog.querySelector('.content-collapse');
  const close = collapse.querySelector('.content-collapse__close');

  close.addEventListener('click', () => {
    collapse.classList.add('content-collapse--hidden');
  });

  const cards = blog.querySelectorAll('.card');
  cards.forEach(card => {
    const index = card.dataset.index;

    card.addEventListener('click', (e) => {
      const active = blog.querySelector('.card--active');
      if (active) active.classList.remove('card--active');

      card.classList.add('card--active');
      SLIDER_BLOG_CONTENT.slideTo(index);

      collapse.classList.remove('content-collapse--hidden');
    });
  });
}