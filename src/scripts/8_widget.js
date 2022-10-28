const widget = document.getElementById('widget');
const widgetIcons = document.querySelectorAll('.widget__link--hide')

if (widget) {
  const container = widget.closest('.widget');

  widget.addEventListener('click', () => {
    widget.parentNode.classList.toggle('widget--open');
  });

  ['click', 'scroll'].forEach(evt =>
    window.addEventListener(evt, (e) => {
      if (!widget.contains(e.target))
        widget.parentNode.classList.remove('widget--open');
    })
  );

  const pageHeight = document.body.scrollHeight;
  window.addEventListener('scroll', () => {
    if (window.scrollY > pageHeight - 600) container.classList.add('widget--hide');
    else container.classList.remove('widget--hide');
  });
}