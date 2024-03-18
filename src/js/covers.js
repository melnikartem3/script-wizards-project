`use strict`;

const scroller = document.querySelectorAll('.covers-scroller-inner');

const arrayFromScroller = Array.from(scroller);

function addDoubleHtml() {
  arrayFromScroller.forEach(scrollerItem => {
    const scrollerInner = Array.from(scrollerItem.children);

    scrollerInner.forEach(item => {
      const duplicateItem = item.cloneNode(true);
      duplicateItem.setAttribute('aria-hidden', true);
      scrollerItem.appendChild(duplicateItem);
    });
  });
}

addDoubleHtml();
