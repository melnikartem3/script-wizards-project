const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionPanels = document.querySelector('.accordion-panel');
const firstContainer = document.querySelector('.ac');
const firstIcon = document.querySelector('.mobile-open-ac');

accordionPanels.style.maxHeight = '100%';
firstContainer.classList.add('active');
firstIcon.style.transform = 'rotate(180deg)';

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.closest('.ac');
    const panel = accordionItem.querySelector('.accordion-panel');
    const icon = this.querySelector('.mobile-open-ac');

    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
    } else {
      panel.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    }
  });
});

//////////////////////////////Swiper///////////////////////////////////////
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiperAboutMe = new Swiper('.swiper-cont', {
  direction: 'horizontal',
  updateOnWindowResize: true,
  enabled: true,
  swipeHandler: '.list-icon',
  speed: 300,

  breakpoints: {
    375: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: '.swiper-button',
    preventClicks: false,
  },
});
