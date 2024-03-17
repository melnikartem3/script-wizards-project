import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';



const swiperContainer = document.querySelector(".swiper");
const prevBtn = document.querySelector(".arrow-btn-left");
const nextBtn = document.querySelector(".arrow-btn-right");

const swiperProjects = new Swiper(swiperContainer, {
    
    modules: [Navigation, Mousewheel, Keyboard],
    slidesPerView: 1, 
    watchOverflow: true,
    speed: 300,

     navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn, 
    },
    mousewheel:{
        invert: true,
    }, 
    keyboard: {
        enabled: true, 
        onlyInViewport: false, 
      }, 
    on: {
      reachEnd: function () {
        nextBtn.classList.add('disabled');
      },
      reachBeginning: function () {
        prevBtn.classList.add('disabled');
      },
      slideChange: function () {
 
        if (this.isEnd) {
          nextBtn.classList.add('disabled');
        } else {
          nextBtn.classList.remove('disabled');
        }
        
        if (this.isBeginning) {
          prevBtn.classList.add('disabled');
        } else {
          prevBtn.classList.remove('disabled');
        }
      }
    }

});
  
document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
  
        if (swiperProjects.isEnd) {
            swiperProjects.slideTo(0);
        } else {
            swiperProjects.slideNext();
        }
    }
});