'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { swiperReviews } from './swiper.js';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.reviews-list');
const btnWrapper = document.querySelector('.reviews-btn-wrapper');

async function fetchDataAndRender() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    list.innerHTML = renderCard(data);

    swiperReviews.update();
  } catch (error) {
    iziToast.error({
      theme: 'dark',
      message: 'Oops, sorry, something went wrong. Please try again later.',
      messageColor: '#ffffff',
      backgroundColor: '#ef4040',
      position: 'topRight',
      pauseOnHover: false,
      progressBarColor: '#b51b1b',
      timeout: 3000,
    });

    list.innerHTML = '<span class="reviews-plug">Not found 😔</span>';

    btnWrapper.style.display = 'none';
  }
}

function renderCard(card) {
  return card
    .map(({ avatar_url, _id, author, review }) => {
      return `
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${avatar_url}"
            alt="${_id}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${author}</h3>
          <p class="reviews-item-text">${review}</p>
        </li>`;
    })
    .join('');
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const section = document.querySelector('.reviews-page');

  let sectionReached = false;

  window.addEventListener('scroll', function () {
    if (!sectionReached && isElementInViewport(section)) {
      sectionReached = true;
      fetchDataAndRender();
    }
  });
});
