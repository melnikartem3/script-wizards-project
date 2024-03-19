'use strict';

import { swiperReviews } from './swiper.js';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.reviews-list');

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    list.innerHTML = renderCard(data);

    swiperReviews;
  })
  .catch(error => console.log(error));

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
