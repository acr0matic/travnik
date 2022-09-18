const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: 30,
  header: '#header',
}

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
}
