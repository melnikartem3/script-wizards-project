`use strict`

const scroller = document.querySelectorAll(".covers-scroller-inner");
const coversSection = document.querySelector(".covers");

const arrayFromScroller = Array.from(scroller)

function addDoubleHtml() {
    arrayFromScroller.forEach((scrollerItem) => {

      const scrollerInner = Array.from(scrollerItem.children);
        
        scrollerInner.forEach((item) => {
                const duplicateItem = item.cloneNode(true);
                duplicateItem.setAttribute("aria-hidden", true);
                scrollerItem.appendChild(duplicateItem);
            })
        })
    }
    
addDoubleHtml()

// const options = {
//     threshold: 0.25,
//     rootMargin: "",
// };

// const observer = new IntersectionObserver(function  (entries, observer) {
//     entries.forEach(entry => {
    
//     })
    
// }, options);


// observer.observe(coversSection)