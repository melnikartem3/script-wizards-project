import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

export const swiperReviews = new Swiper('.swiper-reviews-wrapper', {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  updateOnWindowResize: true,
  slidesPerView: 1,
  enabled: true,
  swipeHandler: '.reviews-list-item',
  speed: 300,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },

    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },
  },

  navigation: {
    prevEl: '.reviews-btn-left',
    nextEl: '.reviews-btn-right',
    preventClicks: false,
  },
});

export const swiperProjects = new Swiper('.swiper-projects', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    prevEl: '.arrow-btn-left',
    nextEl: '.arrow-btn-right',
  },
  watchOverflow: true,
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

export const swiperAbout = new Swiper('.about-swiper-container', {
  loop: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',

  navigation: {
    nextEl: '.about-swiper-button',
  },
  // mousewheel: {
  //   invert: true,
  // },

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
