const header = document.getElementById('header');

if (header) {
  let isReach = false;
  let isOpen = false;

  MaxHeight(header);
  window.addEventListener('resize', () => MaxHeight(header));

  function MaxHeight(target) {
    const height = target.offsetHeight;
    document.documentElement.style.setProperty('--header-height', height + 'px');
  }

  window.addEventListener('scroll', () => {
    isReach = window.scrollY >= heroHeight;

    if (isReach || isOpen) header.classList.add('header-background');
    else header.classList.remove('header-background');
  });

  const mobile = header.querySelector('#mobile-menu');
  const mobileNav = mobile.querySelectorAll('.nav__link');
  const burger = header.querySelector('.header__action');

  burger.addEventListener('click', () => Menu());

  mobileNav.forEach(link => {
    link.addEventListener('click', () => Menu());
  });

  function Menu() {
    isOpen = !isOpen;

    if (!isReach) header.classList.toggle('header-background');

    mobile.classList.toggle('mobile-menu--open');
    burger.firstElementChild.classList.toggle('is-active')
  }
}