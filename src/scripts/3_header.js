const header = document.getElementById('header');
const hero = document.getElementById('hero');

if (header) {
  let heroHeight = hero.offsetHeight;
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

  let scrollOffset = 0;

  burger.addEventListener('click', () => Menu());

  mobileNav.forEach(link => {
    link.addEventListener('click', () => Menu());
  });

  if (!isTablet) {
    window.addEventListener('scroll', () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > (scrollOffset + 150) || currentPosition < (scrollOffset - 150)) Menu('close');
    });
  }

  function Menu(state) {
    if (state === 'close') {
      mobile.classList.remove('mobile-menu--open');
      burger.firstElementChild.classList.remove('is-active');
    }

    else {
      scrollOffset = window.pageYOffset;
      isOpen = !isOpen;

      if (!isReach) header.classList.toggle('header-background');

      mobile.classList.toggle('mobile-menu--open');
      burger.firstElementChild.classList.toggle('is-active')
    }
  }
}