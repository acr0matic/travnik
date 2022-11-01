const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = window.matchMedia('(max-width: 576px)').matches;
const isTablet = window.matchMedia('(max-width: 768px)').matches;

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: -15,
  header: '#header',
}

if (isMobile) {
  scrollParams.offset = 15;
}

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
}
