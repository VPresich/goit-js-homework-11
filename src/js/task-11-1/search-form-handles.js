import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import insertCardsToGallery from '../common/insert-cards-to-gallery.js';
import '../../css/layout/simple-lightbox-window.css';
import iconsUrl from '../../img/icons.svg';

import createCardsGallery from '../common/create-cards-gallery.js';
import { createErrMsg } from '../common/create-msg.js';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.loader');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onFormSubmit);

let slBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  nav: true,
  navText: [
    `<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${iconsUrl}#icon-chevron-left"></use>
        </svg>`,
    `<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${iconsUrl}#icon-chevron-right"></use>
        </svg>`,
  ],
  close: true,
  closeText: `
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${iconsUrl}#close-form"></use>
        </svg>`,
  enableKeyboard: true,
  showCounter: true,
  animationSlide: true,
  loop: true,
});

function onFormSubmit(event) {
  event.preventDefault();
  try {
    loaderRef.style.display = 'block';
    const searchStr = event.currentTarget.search.value.trim();
    insertCardsToGallery(searchStr, refreshOnSuccess, refreshOnError);
  } catch (error) {
    console.error('Error:', error);
  }
}

function refreshOnError(msg) {
  searchForm.search.value = '';
  loaderRef.style.display = 'none';
  createErrMsg(msg);
  galleryRef.innerHTML = '';
  slBox.refresh();
}

function refreshOnSuccess(data) {
  searchForm.search.value = '';
  loaderRef.style.display = 'none';
  createCardsGallery(data, galleryRef);
  slBox.refresh();
}
