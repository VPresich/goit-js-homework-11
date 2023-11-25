import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import insertCardsToGallery from '../common/insert-cards-to-gallery.js';
import '../../css/layout/simple-lightbox-window.css';
import iconsUrl from '../../img/icons.svg';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.loader');

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

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const frm = event.currentTarget;
  try {
    const options = { searchForm, galleryRef, modalWndRef: slBox, loaderRef };
    insertCardsToGallery(options);
  } catch (error) {
    console.error('Error:', error);
  }
}
