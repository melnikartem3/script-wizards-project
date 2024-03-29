const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionPanels = document.querySelector('.accordion-panel');
const firstContainer = document.querySelector('.about-ac');
const firstIcon = document.querySelector('.mobile-open-ac');

accordionPanels.style.maxHeight = '100%';
firstContainer.classList.add('active');
firstIcon.style.transform = 'rotate(180deg)';

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.closest('.about-ac');
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
import { swiperAbout } from './swiper.js';

document.querySelector('.about-swiper-button').addEventListener('click', () => {
  swiperAbout.slideNext();
});