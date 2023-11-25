import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import insertCardsToGallery from './insert-cards-to-gallery.js';
import '../../css/layout/simple-lightbox-window.css'; // my styles for customizing
import iconsUrl from '../../img/icons.svg';

const searchForm = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');
searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const frm = event.currentTarget;
  let searchStr = frm.search.value.trim();

  searchStr = 'yellow flowers';
  insertCardsToGallery(searchStr, galleryRef);

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

    nav: true,
    navText: [
      `<svg
    class="lightbox-button-icon-prev"
    width="24"
    height="24"
    aria-label="icon arrow left">
      <use href="${iconsUrl}#icon-chevron-left"></use>
  </svg>`,

      `<svg
    class="lightbox-button-icon-next"
    width="24"
    height="24"
    aria-label="icon arrow right">
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
}
