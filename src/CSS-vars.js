function setCSSVars() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

document.addEventListener('DOMContentLoaded', setCSSVars);
window.addEventListener('resize', setCSSVars);
