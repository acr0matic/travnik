const widget = document.getElementById('widget');
const widgetIcons = document.querySelectorAll('.widget__link--hide')

if (widget) {
  const container = widget.closest('.widget');

  widget.addEventListener('click', () => {
    widgetIcons.forEach(icon => {
      icon.classList.toggle('widget__link--hide');
    });
  });

  ['click', 'touchstart'].forEach(evt =>
    window.addEventListener(evt, (e) => {
      if (!widget.contains(e.target))
        widgetIcons.forEach(icon => icon.classList.add('widget__link--hide'));
    })
  );

  const pageHeight = document.body.scrollHeight;
  window.addEventListener('scroll', () => {
    if (window.scrollY > pageHeight - 600)
      container.classList.add('widget--hide');
    else
      container.classList.remove('widget--hide');
  });
}
