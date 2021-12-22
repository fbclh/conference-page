// Mobile menu

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

// Mobile menu (nav scrolling)

const scrolling = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  scrolling.style.backgroundColor = '#25282f';
  openIcon.style.color = 'white';
});

//

// Dynamic JS page

const speakers = [
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: '',
  },
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: '',
  },
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: '',
  },
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: '',
  },
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: '',
  },
  {
    name: 'Adam Smith',
    role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: '',
  },
];

const speakersList = document.querySelector('.speakers__list');

const appendSpeakers = () => {
  for (let i = 0; i < speakers.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `<div class="speakers__img-container">
        <span class="speakers__decoration-img"></span>
        <img class="speakers__img" src="${speakers[i].imgSrc}" alt="">
      </div>
      <div class="speakers__info">
        <hgroup>
          <h3 class="speakers__name">${speakers[i].name}</h3>
          <h4 class="speakers__role">${speakers[i].role}</h4>
        </hgroup>
        <span class="title-decoration title-decoration--small"></span>
        <p class="speakers__description">${speakers[i].description}</p>
      </div>`;
    li.classList.add('speakers__card');
    speakersList.appendChild(li);
  }
};

window.onload = () => {
  appendSpeakers();
};
