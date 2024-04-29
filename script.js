// TODO: NAVBAR MENU - RESPONSIVE (MOBILE)
const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});
