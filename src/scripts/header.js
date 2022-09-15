const header = document.getElementById('header');

if (header) {
  MaxHeight(header);
  window.addEventListener('resize', () => MaxHeight(items));

  function MaxHeight(target) {
    const height = target.offsetHeight;
    document.documentElement.style.setProperty('--header-height', height + 'px');
  }
}