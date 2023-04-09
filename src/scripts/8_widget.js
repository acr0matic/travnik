const widget = document.getElementById('widget');
const widgetIcons = document.querySelectorAll('.widget__link--hide')
const scrollTop = document.querySelector('.scroll-top')

if (widget) {
  const container = widget.closest('.widget');

  widget.addEventListener('click', () => {
    widget.parentNode.classList.toggle('widget--open');
    scrollTop.classList.toggle('scroll-top--hidden');
  });

  ['click', 'scroll'].forEach(evt =>
    window.addEventListener(evt, (e) => {
      if (!widget.contains(e.target)) {
        widget.parentNode.classList.remove('widget--open');
        scrollTop.classList.remove('scroll-top--hidden');
      }
    })
  );

  const pageHeight = document.body.scrollHeight;
  window.addEventListener('scroll', () => {
    if (window.scrollY > pageHeight - 600) container.classList.add('widget--hide');
    else container.classList.remove('widget--hide');
  });
}