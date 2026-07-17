const navButton = document.querySelector('.hamburger');
const overLayCont = document.querySelector('.overlay-container');

navButton.addEventListener('click', () => {
  overLayCont.classList.toggle('open');
});