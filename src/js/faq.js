import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// витягуємо елементи, з якими будемо працювати
const faqColumnLine = document.querySelector('.faq-column-line');
const faqListItems = document.querySelectorAll('.faq-list-item');
const faqList = document.querySelector('.faq-list');

const faqBtns = document.querySelectorAll('.faq-list-item-btn');

faqBtns.forEach(function (faqBtn) {
  faqBtn.addEventListener('click', function () {
    const faqListItem = faqBtn.parentElement;
    const faqText = faqListItem.querySelector('.faq-list-item-text');
    const faqSvg = faqBtn.querySelector('.faq-svg');
    const faqTitle = faqListItem.querySelector('.faq-list-item-title');

    if (faqText.classList.contains('is-active')) {
      faqText.classList.remove('is-active');
      faqText.classList.add('faq-mobile-text');
      faqTitle.classList.remove('faq-title-is-active');
      faqBtn.parentElement.classList.remove('close-fqa-list-item-laptop');
      faqSvg.classList.remove('close-svg');
    } else {
      faqText.classList.remove('faq-mobile-text');
      faqText.classList.add('is-active');
      faqTitle.classList.add('faq-title-is-active');
      faqBtn.parentElement.classList.add('close-fqa-list-item-laptop');
      faqSvg.classList.add('close-svg');
    }
  });
});
