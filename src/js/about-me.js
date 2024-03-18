const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionPanels = document.querySelector('.accordion-panel');
const firstContainer = document.querySelector('.ac');
const firstIcon = document.querySelector('.mobile-open-ac');

      accordionPanels.style.maxHeight =  '100%';
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
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiperCont = document.querySelector('.swiper');
const nextBtn = document.querySelector('.swiper-button');

const swiperAboutMe = new Swiper(swiperCont, {
  modules: [Navigation, Mousewheel, Keyboard],
  slidesPerView: 2,
  watchOverflow: true,
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
      slidesPerView: 6,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: nextBtn,
  },
  // mousewheel: {
  //   invert: true,
  // },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },
});

// Обробник кліку на кнопку "Наступний"
document.querySelector('.swiper-button').addEventListener('click', () => {
  const activeSlide = document.querySelector('.swiper-slide.active');
  const nextSlide = activeSlide.nextElementSibling;

  // Перевіряємо, чи існує наступний слайд
  if (nextSlide) {
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
  } else {
    // Якщо наступного слайду немає, перехід на перший
    const firstSlide = document.querySelector('.swiper-slide');
    activeSlide.classList.remove('active');
    firstSlide.classList.add('active');
  }
});
