import{ swiperProjects} from "./swiper"


const swiperContainer = document.querySelector(".swiper-projects");



    swiperContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
  
            if (swiperProjects.isEnd) {
                swiperProjects.slideTo(0);
            } else {
                swiperProjects.slideNext();
            }
        }
    });

   

