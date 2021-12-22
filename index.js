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

// N A B V A R

// const body = document.querySelector('body');
// const navbar = document.querySelector('.navbar');
// const navbarToggler = document.querySelector('.navbar__toggler-container');
// const navbarTogglerIcon = document.querySelector('.navbar__toggler');
// const navbarContainer = document.querySelector('.navbar__container');
// const navbarItemActive = document.querySelector('.navbar__item--active');

// functions

// const toggleMenu = () => {
//   navbarContainer.classList.toggle('navbar__container--active');
//   navbarTogglerIcon.classList.toggle('toggler--active');
//   body.classList.toggle('body--overflow');
// };

// const closeMenu = () => {
//   navbarContainer.classList.remove('navbar__container--active');
//   navbarTogglerIcon.classList.toggle('toggler--active');
//   body.classList.toggle('body--overflow');
// };

// Events

// navbarToggler.addEventListener('click', toggleMenu);
// navbarItemActive.addEventListener('click', closeMenu);

// Event for Scrolling

// let scrolling = false;

// window.addEventListener('scroll', () => {
//   scrolling = true;
// });

// setInterval(() => {
//   if (scrolling) {
//     scrolling = false;
//     if (window.scrollY === 0) {
//       navbar.classList.remove('navbar--scrolled');
//       navbarTogglerIcon.classList.remove('toggler--scrolled');
//     } else {
//       navbar.classList.add('navbar--scrolled');
//       navbarTogglerIcon.classList.add('toggler--scrolled');
//     }
//   }
// }, 300);
