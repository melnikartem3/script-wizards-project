import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// витягуємо елементи, з якими будемо працювати 
const faqColumnLine = document.querySelector('.faq-column-line');
const faqListItems = document.querySelectorAll('.faq-list-item');
const faqList = document.querySelector('.faq-list')

const faqBtns = document.querySelectorAll('.faq-list-item-btn');


faqBtns.forEach(function(faqBtn) {
    faqBtn.addEventListener('click', function () {
        
        const faqListItem = faqBtn.parentElement;
        const faqText = faqListItem.querySelector('.faq-list-item-text');
        const faqSvg = faqBtn.querySelector('.faq-svg')
 
        if (faqText.style.display === 'none' || !faqText.style.display) {
            faqText.style.display = 'block';
            faqBtn.parentElement.classList.remove('close-fqa-list-item-laptop')
            faqSvg.classList.add('close-svg')
        } else {
            faqText.style.display = 'none';
            faqSvg.classList.remove('close-svg')
            faqBtn.parentElement.classList.add('close-fqa-list-item-laptop')
        }
    });
});