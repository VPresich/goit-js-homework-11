import { API_KEY, API_URL } from '../common/constants.js';

import fetchData from './fetch-data.js';
import createCardsGallery from './create-cards-gallery.js';
import { createErrMsg } from './create-msg.js';

async function insertCardsToGallery({
  searchForm, // for input
  galleryRef, // for gallery
  modalWndRef, // for SimpleLightBox
  loaderRef, // for loader
}) {
  const apiParams = {
    key: API_KEY,
    q: encodeURIComponent(strForSearch),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 20,
  };

  const url = `${API_URL}?${new URLSearchParams(apiParams).toString()}`;

  if (loaderRef) loaderRef.style.display = 'block';

  fetchData(url, API_KEY)
    .then(data => {
      if (!data.hits.length) {
        createErrMsg(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        searchForm.search.value = '';
      }
      createCardsGallery(data.hits, galleryRef);
      modalWndRef && modalWndRef.refresh();
      if (loaderRef) loaderRef.style.display = 'none';
    })
    .catch(error => {
      throw error;
    });
}

export default insertCardsToGallery;
