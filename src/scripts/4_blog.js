const blog = document.getElementById('blog');

if (blog) {
  const cards = blog.querySelectorAll('.card');
  cards.forEach(card => {
    const index = card.dataset.index;

    card.addEventListener('click', (e) => {
      const active = blog.querySelector('.card--active');
      if (active) active.classList.remove('card--active');

      card.classList.add('card--active');
      SLIDER_BLOG_CONTENT.slideTo(index);
    });
  });
}