import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

export const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard],
  slidesPerView: 4,
  allowTouchMove: true,
  slideToClickedSlide: true,
  observer: true,
  observeParents: true,
  spaceBetween: 16,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

export const swiperProjects = new Swiper('.swiper-projects', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    prevEl: '.arrow-btn-left',
    nextEl: '.arrow-btn-right',
  },
  watchOverflow: true,
  spaceBetween: 20,
  slidesPerGroup: 1, 
  slidesPerView: 1,
  speed: 300,
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
  },
  
});


new Swiper('.about-swiper-container', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'about-slide-active',

  navigation: {
    nextEl: '.about-swiper-button',
  },
  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
