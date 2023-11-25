import { KEY_CODE_ESC } from '../common/constants.js';

import ModalWindowSlider from './modal-window-slider.js';
import insertCardsToGallery from '../common/insert-cards-to-gallery.js';

const refs = {
  gallery: document.querySelector('.gallery'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  buttonClose: document.querySelector('.close-button'),
  modalContent: document.querySelector('.modal-content'),
  modalClose: document.querySelector('#closeBtn'),
};

refs.gallery.addEventListener('click', onGalleryImageClick);
refs.buttonClose.addEventListener('click', onCloseModalWindow);
refs.modalBackdrop.addEventListener('click', onBackdropClick);
refs.modalClose.addEventListener('click', onCloseModalWindow);

let modalWindowSlider;
const dataForSlider = {
  slidesPerPage: 1,
  prevBtnId: 'prevBtn',
  nextBtnId: 'nextBtn',
  dotsContainerId: 'sliderDots',
  sliderContainerId: 'modalContent',
  slidesCounterId: 'slidesCounter',
  dotDefaultClass: 'slider-dot',
  dotActiveClass: 'active-dot',
  isDotContainText: false,
  sliderContent: refs.modalContent,
};

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  const frm = event.currentTarget;
  const searchStr = frm.search.value.trim();
  insertCardsToGallery(searchStr, refs.gallery);
}

function onGalleryImageClick(event) {
  event.preventDefault();
  const targetRef = event.target;

  const isImageRef =
    targetRef.classList.contains('card-cover') ||
    targetRef.classList.contains('card-cover-darkened');

  if (!isImageRef) {
    return;
  }

  const closestLi = targetRef.closest('li');
  const listImages = event.currentTarget.children;
  const indexList = Array.from(listImages).indexOf(closestLi);

  modalWindowSlider = new ModalWindowSlider({
    ...dataForSlider,
    currentSlide: indexList,
    elementsList: listImages,
  });

  openModalWindow();
}

function openModalWindow() {
  refs.modalBackdrop.classList.add('is-open');
  window.addEventListener('keydown', onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  refs.modalBackdrop.classList.remove('is-open');
  modalWindowSlider.destroy();
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseModalWindow(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow(event);
  }
}
