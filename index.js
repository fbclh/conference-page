// Nav

const openIcon = document.querySelectorAll('.nav__icon--open');
const closeIcon = document.querySelectorAll('.nav__icon-close');
const mobileMenu = document.querySelectorAll('.nav__mobile-menu');
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

//

// const navsDesktop = document.querySelectorAll('.top-nav, .nav-bottom');
const scrolling = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  scrolling.style.backgroundColor = '#25282f';
  openIcon.style.color = 'white';
});

//

