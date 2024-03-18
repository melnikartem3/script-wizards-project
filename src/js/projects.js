import Swiper from 'swiper';
import {Navigation, Mousewheel, Keyboard} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';


const swiperContainer = document.querySelector(".swiper-projects");


const prevBtn = document.querySelector(".arrow-btn-left");
const nextBtn = document.querySelector(".arrow-btn-right");

const swiperProjects = new Swiper(swiperContainer, {
    
    modules: [Navigation, Mousewheel, Keyboard],
   
      watchOverflow: true,
    slidesPerView: 1,
    speed: 300,
centeredSlides: true,


     navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
   
    mousewheel:{
        invert: true,
    },
    keyboard: {
        enabled: true,
       
    },

});

    swiperContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
  
            if (swiperProjects.isEnd) {
                swiperProjects.slideTo(0);
            } else {
                swiperProjects.slideNext();
            }
        }
    });



