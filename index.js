// Navbar mobile

const openIcon = document.querySelector('.nav__icon--open');
const closeIcon = document.querySelector('.nav__icon-close');
const mobileMenu = document.querySelector('.nav__mobile-menu');
const menuLinks = document.querySelectorAll('.nav__mobile');

closeIcon.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

openIcon.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
  });
});

// Mobile nav scrolling

const scrolling = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  scrolling.style.backgroundColor = '#25282f';
  openIcon.style.color = 'white';
});

//
